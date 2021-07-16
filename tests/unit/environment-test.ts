import { module, test } from 'qunit';
import { wrap, read, write } from 'ember-exclaim';
import { A } from '@ember/array';
import Binding from 'ember-exclaim/-private/binding';
import HelperSpec from 'ember-exclaim/-private/helper-spec';
import Environment, { resolvePath } from 'ember-exclaim/-private/environment';
import { htmlSafe } from '@ember/string';
import EnvironmentData from '../../addon/-private/environment/data';
import EnvironmentArray from '../../addon/-private/environment/array';

module('Unit | environment', function () {
  test('simple lookups', function (assert) {
    const env = new Environment({ foo: 'bar' });
    assert.equal(read(env, 'foo'), 'bar');

    write(env, 'foo', 'baz');
    assert.equal(read(env, 'foo'), 'baz');
  });

  test('simple array lookups', function (assert) {
    const env = new Environment({ foo: ['bar', 'baz'] });
    assert.equal(read(env, 'foo.0'), 'bar');
    assert.equal(read(env, 'foo.1'), 'baz');
  });

  test('set unknown property', function (assert) {
    const env = new Environment({ foo: ['bar'], baz: '' });
    write(env, 'baz', 'bax');
    assert.equal(read(env, 'baz'), 'bax');
    assert.equal(read(env, 'foo.length'), 1);
    write(env, 'foo.3', 'qux');
    assert.equal(read(env, 'foo.3'), 'qux');
    assert.equal(read(env, 'foo.length'), 4);
  });

  test('array mutation', function (assert) {
    const foo = ['bar', 'baz'];
    const env = new Environment({ foo });
    write(env, 'foo.1', 'oops');
    assert.equal(foo[1], 'oops');
    assert.equal(read(env, 'foo.1'), 'oops');
    write(env, 'foo.0', 'oops again');
    assert.equal(read(foo, 'firstObject'), 'oops again');
  });

  test('HTML-safe strings', function (assert) {
    const env = new Environment({ foo: htmlSafe('hello') });
    assert.deepEqual(read(env, 'foo'), htmlSafe('hello'));
  });

  test('simple binding resolution', function (assert) {
    const env = new Environment({ foo: 'bar', baz: new Binding('foo') });
    assert.equal(read(env, 'baz'), 'bar');

    write(env, 'foo', 'qux');
    assert.equal(read(env, 'baz'), 'qux');

    write(env, 'baz', 'fizz');
    assert.equal(read(env, 'foo'), 'fizz');
  });

  test('complex binding resolution', function (assert) {
    const env = new Environment({
      x: { y: 'foo', z: 'bar' },
      other: new Binding('x'),
      stillMore: new Binding('other.z'),
    });
    assert.equal(read(env, 'stillMore'), 'bar');
    assert.equal(resolvePath(env, 'x.y'), 'x.y');
    assert.equal(resolvePath(env, 'other'), 'x');
    assert.equal(resolvePath(env, 'stillMore'), 'x.z');

    write(env, 'x.z', '123');
    assert.equal(read(env, 'other.z'), '123');
    assert.equal(read(env, 'stillMore'), '123');

    write(env, 'other.z', 234);
    assert.equal(read(env, 'x.z'), 234);
    assert.equal(read(env, 'stillMore'), 234);

    write(env, 'stillMore', 345);
    assert.equal(read(env, 'x.z'), 345);
    assert.equal(read(env, 'other.z'), 345);
  });

  test('value reference resolution', function (assert) {
    const env = new Environment({ foo: 'bar' });
    const value = wrap({ key: new Binding('foo') }, env);
    assert.equal(read(value, 'key'), 'bar');
    assert.equal(resolvePath(value, 'key'), 'foo');

    write(value, 'key', 'ok');
    assert.equal(read(env, 'foo'), 'ok');
  });

  test('chained reference resolution', function (assert) {
    const env = new Environment({ foo: 'bar' });
    const value = wrap({ key: { child: new Binding('foo') } }, env);
    const subvalue = read(value, 'key');
    assert.equal(read(subvalue, 'child'), 'bar');

    assert.equal(resolvePath(value, 'key'), undefined);
    assert.equal(resolvePath(value, 'key.child'), 'foo');
    assert.equal(resolvePath(subvalue, 'child'), 'foo');

    write(subvalue, 'child', 321);
    assert.equal(read(value, 'key.child'), 321);
    assert.equal(read(env, 'foo'), 321);

    write(env, 'foo', '999');
    assert.equal(read(subvalue, 'child'), '999');
  });

  test('array values', function (assert) {
    const env = new Environment({
      foo: 2,
      array: A([1, new Binding('foo'), 3]),
    });

    const ref = wrap({ array: new Binding('array') }, env);
    const envArray = read(env, 'array');
    const refArray = read(ref, 'array') as EnvironmentArray<unknown>;

    assert.deepEqual(envArray.toArray(), [1, 2, 3]);
    assert.deepEqual(refArray.toArray(), [1, 2, 3]);

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

    write(env, 'foo', 0);
    assert.deepEqual(envArray.toArray(), [0, 3, 4]);
    assert.deepEqual(refArray.toArray(), [0, 3, 4]);
  });

  test('environment extension', function (assert) {
    const base = new Environment({ a: 'bar' } as {
      a: string;
      c?: string;
      d?: string;
    });

    const ext1 = base.extend({ b: 'qux' });
    const ext2 = base.extend({ a: 'newbar' });

    assert.equal(read(base, 'a'), 'bar');
    assert.equal(read(base, 'b'), undefined);

    assert.equal(read(ext1, 'a'), 'bar');
    assert.equal(read(ext1, 'b'), 'qux');

    assert.equal(read(ext2, 'a'), 'newbar');
    assert.equal(read(ext2, 'b'), undefined);

    // Writing to an inherited key updates at the level it was inherited from
    write(ext1, 'a', 'x');
    assert.equal(read(base, 'a'), 'x');
    assert.equal(read(ext1, 'a'), 'x');
    assert.equal(read(ext2, 'a'), 'newbar');

    // Writing to an overridden key updates at the level of the override
    write(ext2, 'a', 'y');
    assert.equal(read(base, 'a'), 'x');
    assert.equal(read(ext1, 'a'), 'x');
    assert.equal(read(ext2, 'a'), 'y');

    // Writing a previously-nonexistent key sets it in the leaf environment
    write(ext1, 'c', 'newvalue');
    assert.equal(read(base, 'c'), undefined);
    assert.equal(read(ext1, 'c'), 'newvalue');
    assert.equal(read(ext2, 'c'), undefined);

    // Writing a previously-nonexistent key in the base propagates down
    write(base, 'd', 'everywhere');
    assert.equal(read(base, 'd'), 'everywhere');
    assert.equal(read(ext1, 'd'), 'everywhere');
    assert.equal(read(ext2, 'd'), 'everywhere');
  });

  test('path resolution', function (assert) {
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
    assert.equal(
      resolvePath(env, 'nested.super.extra.nested'),
      'nested.super.extra.nested'
    );

    const nested = read(env, 'nested');
    assert.equal(resolvePath(nested, 'nonexistent'), 'nested.nonexistent');
    assert.equal(resolvePath(nested, 'ownKey'), 'nested.ownKey');
    assert.equal(resolvePath(nested, 'pointsToRoot'), 'root');

    const array = read(env, 'array');
    assert.equal(resolvePath(array, 'firstObject.pointsToRoot'), 'root');
    assert.equal(resolvePath(array, 'firstObject.ownKey'), 'nested.ownKey');
    assert.equal(resolvePath(array, 'lastObject.ownKey'), 'array.1.ownKey');
    assert.equal(resolvePath(array, 'lastObject.pointsToParent'), 'array');
    assert.throws(
      () => resolvePath(array, 'firstObject'),
      /Cannot canonicalize the path to an array element/
    );
    assert.throws(
      () => resolvePath(array, '0'),
      /Cannot canonicalize the path to an array element/
    );

    // A value (like components' `config`) that has bindings to the environment, but didn't itself come from there
    const config = wrap(
      {
        abc: 123,
        binding: new Binding('nested.ownKey'),
      },
      env
    );

    assert.equal(resolvePath(config, 'abc'), undefined);
    assert.equal(resolvePath(config, 'binding'), 'nested.ownKey');

    const subenv = env.extend({
      subValue: 'hello',
      upReference: new Binding('nested.ownKey'),
      recycled: read(env, 'nested.super'),
    });

    assert.equal(resolvePath(subenv, 'upReference'), 'nested.ownKey');
    assert.equal(resolvePath(subenv, 'subValue'), 'subValue');
    assert.equal(resolvePath(subenv, 'recycled'), 'nested.super');
    assert.equal(resolvePath(subenv, 'recycled.extra'), 'nested.super.extra');
  });

  test('metadata resolution', function (assert) {
    const env = new Environment(
      {
        foo: 'bar',
        baz: new Binding('foo'),
        deep: {
          own: 'key',
          ref: new Binding('baz'),
        },
      },
      (path) => {
        return { tag: 'so meta', path };
      }
    );

    assert.deepEqual(env.metaForField('foo'), { tag: 'so meta', path: 'foo' });
    assert.deepEqual(env.metaForField('baz'), { tag: 'so meta', path: 'foo' });
    assert.deepEqual(env.metaForField('deep.ref'), {
      tag: 'so meta',
      path: 'foo',
    });

    const value = read(env, 'deep');
    assert.deepEqual(env.metaForField(value, 'own'), {
      tag: 'so meta',
      path: 'deep.own',
    });
    assert.deepEqual(env.metaForField(value, 'ref'), {
      tag: 'so meta',
      path: 'foo',
    });
  });
});

test('helper invocation', function (assert) {
  type WordConfig = EnvironmentData<{ word: string }>;

  const env = new Environment({
    foo: 'bar',
    shouty: new HelperSpec(
      (config: WordConfig) => read(config, 'word').toUpperCase(),
      {
        word: new Binding('foo'),
      }
    ),
    array: [
      1,
      2,
      new HelperSpec((config) => read(config, 'word.length'), {
        word: new Binding('shouty'),
      }),
    ],
    nested: new HelperSpec(
      (config: WordConfig) => read(config, 'word').toUpperCase(),
      {
        word: new HelperSpec(
          (config: WordConfig) =>
            read(config, 'word').split('').reverse().join(''),
          {
            word: new Binding('foo'),
          }
        ),
      }
    ),
  });

  assert.equal(read(env, 'foo'), 'bar');
  assert.equal(read(env, 'shouty'), 'BAR');
  assert.equal(read(env, 'nested'), 'RAB');
  assert.deepEqual(read(env, 'array').toArray(), [1, 2, 3]);

  write(env, 'foo', 'ok');

  assert.equal(read(env, 'foo'), 'ok');
  assert.equal(read(env, 'shouty'), 'OK');
  assert.equal(read(env, 'nested'), 'KO');
  assert.deepEqual(read(env, 'array').toArray(), [1, 2, 2]);
});
