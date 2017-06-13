import { module, test } from 'qunit';
import Ember from 'ember';
import Binding from 'ember-exclaim/-private/binding';
import Environment, { wrap } from 'ember-exclaim/-private/environment';

const {
  get,
  set,
} = Ember;

module('Unit | environment');

test('simple lookups', function(assert) {
  const env = new Environment({ foo: 'bar' });
  assert.equal(get(env, 'foo'), 'bar');

  set(env, 'foo', 'baz');
  assert.equal(get(env, 'foo'), 'baz');
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

  set(value, 'key', 'ok');
  assert.equal(get(env, 'foo'), 'ok');
});

test('chained reference resolution', function(assert) {
  const env = new Environment({ foo: 'bar' });
  const value = wrap({ key: { child: new Binding('foo') } }, env);
  const subvalue = get(value, 'key');
  assert.equal(get(subvalue, 'child'), 'bar');

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
