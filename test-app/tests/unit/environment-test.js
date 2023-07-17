import { set, get } from '@ember/object';
import { module, test } from 'qunit';
import Binding from 'ember-exclaim/-private/binding';
import HelperSpec from 'ember-exclaim/-private/helper-spec';
import Environment, {
  wrap,
  resolvePath,
} from 'ember-exclaim/-private/environment';
import { htmlSafe } from '@ember/template';

module('Unit | environment', function () {
  test('simple lookups', function (assert) {
    const env = new Environment({ foo: 'bar' });
    assert.strictEqual(get(env, 'foo'), 'bar');

    set(env, 'foo', 'baz');
    assert.strictEqual(get(env, 'foo'), 'baz');
  });

  test('simple array lookups', function (assert) {
    const env = new Environment({ foo: ['bar', 'baz'] });
    assert.strictEqual(get(env, 'foo.0'), 'bar');
    assert.strictEqual(get(env, 'foo.1'), 'baz');
  });

  test('set unknown property', function (assert) {
    const env = new Environment({ foo: ['bar'] });
    set(env, 'baz', 'bax');
    assert.strictEqual(get(env, 'baz'), 'bax');
    assert.strictEqual(get(env, 'foo.length'), 1);
    set(env, 'foo.3', 'qux');
    assert.strictEqual(get(env, 'foo.3'), 'qux');
    assert.strictEqual(get(env, 'foo.length'), 4);
  });

  test('array mutation', function (assert) {
    const foo = ['bar', 'baz'];
    const env = new Environment({ foo });
    set(env, 'foo.1', 'oops');
    assert.strictEqual(foo[1], 'oops');
    assert.strictEqual(get(env, 'foo.1'), 'oops');
    set(env, 'foo.0', 'oops again');
    assert.strictEqual(get(foo, 'firstObject'), 'oops again');
  });

  test('HTML-safe strings', function (assert) {
    const env = new Environment({ foo: htmlSafe('hello') });
    assert.deepEqual(get(env, 'foo'), htmlSafe('hello'));
  });

  test('simple binding resolution', function (assert) {
    const env = new Environment({ foo: 'bar', baz: new Binding('foo') });
    assert.strictEqual(get(env, 'baz'), 'bar');

    set(env, 'foo', 'qux');
    assert.strictEqual(get(env, 'baz'), 'qux');

    set(env, 'baz', 'fizz');
    assert.strictEqual(get(env, 'foo'), 'fizz');
  });

  test('complex binding resolution', function (assert) {
    const env = new Environment({
      x: { y: 'foo', z: 'bar' },
      other: new Binding('x'),
      stillMore: new Binding('other.z'),
    });
    assert.strictEqual(get(env, 'stillMore'), 'bar');
    assert.strictEqual(resolvePath(env, 'x.y'), 'x.y');
    assert.strictEqual(resolvePath(env, 'other'), 'x');
    assert.strictEqual(resolvePath(env, 'stillMore'), 'x.z');

    set(env, 'x.z', 123);
    assert.strictEqual(get(env, 'other.z'), 123);
    assert.strictEqual(get(env, 'stillMore'), 123);

    set(env, 'other.z', 234);
    assert.strictEqual(get(env, 'x.z'), 234);
    assert.strictEqual(get(env, 'stillMore'), 234);

    set(env, 'stillMore', 345);
    assert.strictEqual(get(env, 'x.z'), 345);
    assert.strictEqual(get(env, 'other.z'), 345);
  });

  test('value reference resolution', function (assert) {
    const env = new Environment({ foo: 'bar' });
    const value = wrap({ key: new Binding('foo') }, env);
    assert.strictEqual(get(value, 'key'), 'bar');
    assert.strictEqual(resolvePath(value, 'key'), 'foo');

    set(value, 'key', 'ok');
    assert.strictEqual(get(env, 'foo'), 'ok');
  });

  test('chained reference resolution', function (assert) {
    const env = new Environment({ foo: 'bar' });
    const value = wrap({ key: { child: new Binding('foo') } }, env);
    const subvalue = get(value, 'key');
    assert.strictEqual(get(subvalue, 'child'), 'bar');

    assert.strictEqual(resolvePath(value, 'key'), undefined);
    assert.strictEqual(resolvePath(value, 'key.child'), 'foo');
    assert.strictEqual(resolvePath(subvalue, 'child'), 'foo');

    set(subvalue, 'child', 321);
    assert.strictEqual(get(value, 'key.child'), 321);
    assert.strictEqual(get(env, 'foo'), 321);

    set(env, 'foo', 999);
    assert.strictEqual(get(subvalue, 'child'), 999);
  });

  test('array values', function (assert) {
    const env = new Environment({ foo: 2, array: [1, new Binding('foo'), 3] });
    const ref = wrap({ array: new Binding('array') }, env);
    assert.deepEqual(get(env, 'array').toArray(), [1, 2, 3]);
    assert.deepEqual(get(ref, 'array').toArray(), [1, 2, 3]);

    const envArray = get(env, 'array');
    const refArray = get(ref, 'array');
    assert.strictEqual(envArray.objectAt(1), 2);
    assert.strictEqual(refArray.objectAt(1), 2);

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

  test('environment extension', function (assert) {
    const base = new Environment({ a: 'bar' });
    const ext1 = base.extend({ b: 'qux' });
    const ext2 = base.extend({ a: 'newbar' });

    assert.strictEqual(get(base, 'a'), 'bar');
    assert.strictEqual(get(base, 'b'), undefined);

    assert.strictEqual(get(ext1, 'a'), 'bar');
    assert.strictEqual(get(ext1, 'b'), 'qux');

    assert.strictEqual(get(ext2, 'a'), 'newbar');
    assert.strictEqual(get(ext2, 'b'), undefined);

    // Writing to an inherited key updates at the level it was inherited from
    set(ext1, 'a', 'x');
    assert.strictEqual(get(base, 'a'), 'x');
    assert.strictEqual(get(ext1, 'a'), 'x');
    assert.strictEqual(get(ext2, 'a'), 'newbar');

    // Writing to an overridden key updates at the level of the override
    set(ext2, 'a', 'y');
    assert.strictEqual(get(base, 'a'), 'x');
    assert.strictEqual(get(ext1, 'a'), 'x');
    assert.strictEqual(get(ext2, 'a'), 'y');

    // Writing a previously-nonexistent key sets it in the leaf environment
    set(ext1, 'c', 'newvalue');
    assert.strictEqual(get(base, 'c'), undefined);
    assert.strictEqual(get(ext1, 'c'), 'newvalue');
    assert.strictEqual(get(ext2, 'c'), undefined);

    // Writing a previously-nonexistent key in the base propagates down
    set(base, 'd', 'everywhere');
    assert.strictEqual(get(base, 'd'), 'everywhere');
    assert.strictEqual(get(ext1, 'd'), 'everywhere');
    assert.strictEqual(get(ext2, 'd'), 'everywhere');
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

    assert.strictEqual(resolvePath(env, 'nonexistent'), 'nonexistent');
    assert.strictEqual(resolvePath(env, 'root'), 'root');
    assert.strictEqual(resolvePath(env, 'nested'), 'nested');
    assert.strictEqual(resolvePath(env, 'nested.ownKey'), 'nested.ownKey');
    assert.strictEqual(resolvePath(env, 'nested.pointsToRoot'), 'root');
    assert.strictEqual(resolvePath(env, 'array'), 'array');
    assert.strictEqual(
      resolvePath(env, 'array.firstObject.ownKey'),
      'nested.ownKey'
    );
    assert.strictEqual(
      resolvePath(env, 'nested.super.extra.nested'),
      'nested.super.extra.nested'
    );

    const nested = get(env, 'nested');
    assert.strictEqual(
      resolvePath(nested, 'nonexistent'),
      'nested.nonexistent'
    );
    assert.strictEqual(resolvePath(nested, 'ownKey'), 'nested.ownKey');
    assert.strictEqual(resolvePath(nested, 'pointsToRoot'), 'root');

    const array = get(env, 'array');
    assert.strictEqual(resolvePath(array, 'firstObject.pointsToRoot'), 'root');
    assert.strictEqual(
      resolvePath(array, 'firstObject.ownKey'),
      'nested.ownKey'
    );
    assert.strictEqual(
      resolvePath(array, 'lastObject.ownKey'),
      'array.1.ownKey'
    );
    assert.strictEqual(
      resolvePath(array, 'lastObject.pointsToParent'),
      'array'
    );
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

    assert.strictEqual(resolvePath(config, 'abc'), undefined);
    assert.strictEqual(resolvePath(config, 'binding'), 'nested.ownKey');

    const subenv = env.extend({
      subValue: 'hello',
      // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
      upReference: new Binding('nested.ownKey'),
      recycled: get(env, 'nested.super'),
    });

    assert.strictEqual(resolvePath(subenv, 'upReference'), 'nested.ownKey');
    assert.strictEqual(resolvePath(subenv, 'subValue'), 'subValue');
    assert.strictEqual(resolvePath(subenv, 'recycled'), 'nested.super');
    assert.strictEqual(
      resolvePath(subenv, 'recycled.extra'),
      'nested.super.extra'
    );
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

    const value = get(env, 'deep');
    assert.deepEqual(env.metaForField(value, 'own'), {
      tag: 'so meta',
      path: 'deep.own',
    });
    assert.deepEqual(env.metaForField(value, 'ref'), {
      tag: 'so meta',
      path: 'foo',
    });
  });

  test('helper invocation', function (assert) {
    const env = new Environment({
      foo: 'bar',
      shouty: new HelperSpec((config) => get(config, 'word').toUpperCase(), {
        word: new Binding('foo'),
      }),
      array: [
        1,
        2,
        new HelperSpec((config) => get(config, 'word.length'), {
          word: new Binding('shouty'),
        }),
      ],
      nested: new HelperSpec((config) => get(config, 'word').toUpperCase(), {
        word: new HelperSpec(
          (config) => get(config, 'word').split('').reverse().join(''),
          {
            word: new Binding('foo'),
          }
        ),
      }),
    });

    assert.strictEqual(get(env, 'foo'), 'bar');
    assert.strictEqual(get(env, 'shouty'), 'BAR');
    assert.strictEqual(get(env, 'nested'), 'RAB');
    assert.deepEqual(get(env, 'array').toArray(), [1, 2, 3]);

    set(env, 'foo', 'ok');

    assert.strictEqual(get(env, 'foo'), 'ok');
    assert.strictEqual(get(env, 'shouty'), 'OK');
    assert.strictEqual(get(env, 'nested'), 'KO');
    assert.deepEqual(get(env, 'array').toArray(), [1, 2, 2]);
  });
});
