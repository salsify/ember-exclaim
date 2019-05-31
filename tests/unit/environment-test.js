import { set, get } from '@ember/object';
import { module, test } from 'qunit';
import Binding from 'ember-exclaim/-private/binding';
import HelperSpec from 'ember-exclaim/-private/helper-spec';
import Environment, { wrap, resolvePath } from 'ember-exclaim/-private/environment';
import { htmlSafe } from '@ember/string';

module('Unit | environment', function() {
  test('simple lookups', function(assert) {
    const env = new Environment({ foo: 'bar' });
    assert.equal(get(env, 'foo'), 'bar');

    set(env, 'foo', 'baz');
    assert.equal(get(env, 'foo'), 'baz');
  });

  test('simple array lookups', function(assert) {
    const env = new Environment({ foo: ['bar', 'baz'] });
    assert.equal(get(env, 'foo.0'), 'bar');
    assert.equal(get(env, 'foo.1'), 'baz');
  });

  test('set unknown property', function(assert) {
    const env = new Environment({ foo: ['bar'] });
    set(env, 'baz', 'bax');
    assert.equal(get(env, 'baz'), 'bax');
    assert.equal(get(env, 'foo.length'), 1);
    set(env, 'foo.3', 'qux');
    assert.equal(get(env, 'foo.3'), 'qux');
    assert.equal(get(env, 'foo.length'), 4);
  });

  test('array mutation', function(assert) {
    const foo = ['bar', 'baz'];
    const env = new Environment({ foo });
    set(env, 'foo.1', 'oops');
    assert.equal(foo[1], 'oops');
    assert.equal(get(env, 'foo.1'), 'oops');
    set(env, 'foo.0', 'oops again');
    assert.equal(get(foo, 'firstObject'), 'oops again');
  });

  test('HTML-safe strings', function(assert) {
    const env = new Environment({ foo: htmlSafe('hello') });
    assert.deepEqual(get(env, 'foo'), htmlSafe('hello'));
  });

  test('simple binding resolution', function(assert) {
    const env = new Environment({ foo: 'bar', baz: new Binding('foo') });
    assert.equal(get(env, 'baz'), 'bar');

    set(env, 'foo', 'qux');
    assert.equal(get(env, 'baz'), 'qux');

    set(env, 'baz', 'fizz');
    assert.equal(get(env, 'foo'), 'fizz');
  });

  test('complex binding resolution', function(assert) {
    const env = new Environment({ x: { y: 'foo', z: 'bar' }, other: new Binding('x'), stillMore: new Binding('other.z') });
    assert.equal(get(env, 'stillMore'), 'bar');
    assert.equal(resolvePath(env, 'x.y'), 'x.y');
    assert.equal(resolvePath(env, 'other'), 'x');
    assert.equal(resolvePath(env, 'stillMore'), 'x.z');

    set(env, 'x.z', 123);
    assert.equal(get(env, 'other.z'), 123);
    assert.equal(get(env, 'stillMore'), 123);

    set(env, 'other.z', 234);
    assert.equal(get(env, 'x.z'), 234);
    assert.equal(get(env, 'stillMore'), 234);

    set(env, 'stillMore', 345);
    assert.equal(get(env, 'x.z'), 345);
    assert.equal(get(env, 'other.z'), 345);
  });

  test('value reference resolution', function(assert) {
    const env = new Environment({ foo: 'bar' });
    const value = wrap({ key: new Binding('foo') }, env);
    assert.equal(get(value, 'key'), 'bar');
    assert.equal(resolvePath(value, 'key'), 'foo');

    set(value, 'key', 'ok');
    assert.equal(get(env, 'foo'), 'ok');
  });

  test('chained reference resolution', function(assert) {
    const env = new Environment({ foo: 'bar' });
    const value = wrap({ key: { child: new Binding('foo') } }, env);
    const subvalue = get(value, 'key');
    assert.equal(get(subvalue, 'child'), 'bar');

    assert.equal(resolvePath(value, 'key'), undefined);
    assert.equal(resolvePath(value, 'key.child'), 'foo');
    assert.equal(resolvePath(subvalue, 'child'), 'foo');

    set(subvalue, 'child', 321);
    assert.equal(get(value, 'key.child'), 321);
    assert.equal(get(env, 'foo'), 321);

    set(env, 'foo', 999);
    assert.equal(get(subvalue, 'child'), 999);
  });

  test('array values', function(assert) {
    const env = new Environment({ foo: 2, array: [1, new Binding('foo'), 3] });
    const ref = wrap({ array: new Binding('array') }, env);
    assert.deepEqual(get(env, 'array').toArray(), [1, 2, 3]);
    assert.deepEqual(get(ref, 'array').toArray(), [1, 2, 3]);

    const envArray = get(env, 'array');
    const refArray = get(ref, 'array');
    assert.equal(envArray.objectAt(1), 2);
    assert.equal(refArray.objectAt(1), 2);

    envArray.replace(1, 1, [100]);
    assert.deepEqual(envArray.toArray(), [1, 100, 3]);
    assert.deepEqual(refArray.toArray(), [1, 100, 3]);

    envArray.pushObject(4);
    assert.deepEqual(envArray.toArray(), [1, 100, 3, 4]);
    assert.deepEqual(refArray.toArray(), [1, 100, 3, 4]);

    refArray.shiftObject();
    assert.deepEqual(envArray.toArray(), [100, 3, 4]);
    assert.deepEqual(refArray.toArray(), [100, 3, 4]);

    set(env, 'foo', 0);
    assert.deepEqual(envArray.toArray(), [0, 3, 4]);
    assert.deepEqual(refArray.toArray(), [0, 3, 4]);
  });

  test('environment extension', function(assert) {
    const base = new Environment({ a: 'bar' });
    const ext1 = base.extend({ b: 'qux' });
    const ext2 = base.extend({ a: 'newbar' });

    assert.equal(get(base, 'a'), 'bar');
    assert.equal(get(base, 'b'), undefined);

    assert.equal(get(ext1, 'a'), 'bar');
    assert.equal(get(ext1, 'b'), 'qux');

    assert.equal(get(ext2, 'a'), 'newbar');
    assert.equal(get(ext2, 'b'), undefined);

    // Writing to an inherited key updates at the level it was inherited from
    set(ext1, 'a', 'x');
    assert.equal(get(base, 'a'), 'x');
    assert.equal(get(ext1, 'a'), 'x');
    assert.equal(get(ext2, 'a'), 'newbar');

    // Writing to an overridden key updates at the level of the override
    set(ext2, 'a', 'y');
    assert.equal(get(base, 'a'), 'x');
    assert.equal(get(ext1, 'a'), 'x');
    assert.equal(get(ext2, 'a'), 'y');

    // Writing a previously-nonexistent key sets it in the leaf environment
    set(ext1, 'c', 'newvalue');
    assert.equal(get(base, 'c'), undefined);
    assert.equal(get(ext1, 'c'), 'newvalue');
    assert.equal(get(ext2, 'c'), undefined);

    // Writing a previously-nonexistent key in the base propagates down
    set(base, 'd', 'everywhere')
    assert.equal(get(base, 'd'), 'everywhere');
    assert.equal(get(ext1, 'd'), 'everywhere');
    assert.equal(get(ext2, 'd'), 'everywhere');
  });

  test('path resolution', function(assert) {
    const env = new Environment({
      root: 'value',
      nested: {
        pointsToRoot: new Binding('root'),
        ownKey: 'ownValue',
        super: {
          extra: {
            nested: true,
          },
        },
      },
      array: [
        new Binding('nested'),
        {
          pointsToParent: new Binding('array'),
          ownKey: 'ownKey',
        },
      ],
    });

    assert.equal(resolvePath(env, 'nonexistent'), 'nonexistent');
    assert.equal(resolvePath(env, 'root'), 'root');
    assert.equal(resolvePath(env, 'nested'), 'nested');
    assert.equal(resolvePath(env, 'nested.ownKey'), 'nested.ownKey');
    assert.equal(resolvePath(env, 'nested.pointsToRoot'), 'root');
    assert.equal(resolvePath(env, 'array'), 'array');
    assert.equal(resolvePath(env, 'array.firstObject.ownKey'), 'nested.ownKey');
    assert.equal(resolvePath(env, 'nested.super.extra.nested'), 'nested.super.extra.nested');

    const nested = get(env, 'nested');
    assert.equal(resolvePath(nested, 'nonexistent'), 'nested.nonexistent');
    assert.equal(resolvePath(nested, 'ownKey'), 'nested.ownKey');
    assert.equal(resolvePath(nested, 'pointsToRoot'), 'root');

    const array = get(env, 'array');
    assert.equal(resolvePath(array, 'firstObject.pointsToRoot'), 'root');
    assert.equal(resolvePath(array, 'firstObject.ownKey'), 'nested.ownKey');
    assert.equal(resolvePath(array, 'lastObject.ownKey'), 'array.1.ownKey');
    assert.equal(resolvePath(array, 'lastObject.pointsToParent'), 'array');
    assert.throws(() => resolvePath(array, 'firstObject'), /Cannot canonicalize the path to an array element/);
    assert.throws(() => resolvePath(array, '0'), /Cannot canonicalize the path to an array element/);

    // A value (like components' `config`) that has bindings to the environment, but didn't itself come from there
    const config = wrap({
      abc: 123,
      binding: new Binding('nested.ownKey')
    }, env);

    assert.equal(resolvePath(config, 'abc'), undefined);
    assert.equal(resolvePath(config, 'binding'), 'nested.ownKey');

    const subenv = env.extend({
      subValue: 'hello',
      upReference: new Binding('nested.ownKey'),
      recycled: get(env, 'nested.super'),
    });

    assert.equal(resolvePath(subenv, 'upReference'), 'nested.ownKey');
    assert.equal(resolvePath(subenv, 'subValue'), 'subValue');
    assert.equal(resolvePath(subenv, 'recycled'), 'nested.super');
    assert.equal(resolvePath(subenv, 'recycled.extra'), 'nested.super.extra');
  });

  test('metadata resolution', function(assert) {
    const env = new Environment({
      foo: 'bar',
      baz: new Binding('foo'),
      deep: {
        own: 'key',
        ref: new Binding('baz'),
      },
    }, (path) => {
      return { tag: 'so meta', path };
    });

    assert.deepEqual(env.metaForField('foo'), { tag: 'so meta', path: 'foo' });
    assert.deepEqual(env.metaForField('baz'), { tag: 'so meta', path: 'foo' });
    assert.deepEqual(env.metaForField('deep.ref'), { tag: 'so meta', path: 'foo' });

    const value = get(env, 'deep');
    assert.deepEqual(env.metaForField(value, 'own'), { tag: 'so meta', path: 'deep.own' });
    assert.deepEqual(env.metaForField(value, 'ref'), { tag: 'so meta', path: 'foo' });
  });
});

test('helper invocation', function(assert) {
  const env = new Environment({
    foo: 'bar',
    shouty: new HelperSpec(config => get(config, 'word').toUpperCase(), { word: new Binding('foo') }),
    array: [
      1,
      2,
      new HelperSpec(config => get(config, 'word.length'), { word: new Binding('shouty') }),
    ],
    nested: new HelperSpec(config => get(config, 'word').toUpperCase(), {
      word: new HelperSpec(config => get(config, 'word').split('').reverse().join(''), {
        word: new Binding('foo')
      })
    })
  });

  assert.equal(get(env, 'foo'), 'bar');
  assert.equal(get(env, 'shouty'), 'BAR');
  assert.equal(get(env, 'nested'), 'RAB');
  assert.deepEqual(get(env, 'array').toArray(), [1, 2, 3]);

  set(env, 'foo', 'ok');

  assert.equal(get(env, 'foo'), 'ok');
  assert.equal(get(env, 'shouty'), 'OK');
  assert.equal(get(env, 'nested'), 'KO');
  assert.deepEqual(get(env, 'array').toArray(), [1, 2, 2]);
});
