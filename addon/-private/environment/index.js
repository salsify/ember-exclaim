import Ember from 'ember';
import createEnvComputed from './create-env-computed';
import Value from './value';
import ArrayValue from './array-value';

const {
  get,
  set,
  makeArray,
  Object: EmberObject,
} = Ember;

/*
 * Wraps an object that may contain exclaim Bindings, automatically resolving
 * them to their ultimate values. Note that any non-primitive value returned
 * from a call `get(env, 'some.key')` will itself be wrapped in a proxy allowing
 * it to resolve subsequent calls to get its own values.
 */
export default class Environment extends EmberObject {
  constructor(bound) {
    super();
    this.__bound__ = makeArray(bound);
  }

  extend(values) {
    return new Environment([values, ...this.__bound__]);
  }

  unknownProperty(key) {
    createEnvComputed(this, key, `__bound__.${findIndex(this.__bound__, key)}`);
    return get(this, key);
  }

  setUnknownProperty(key, value) {
    createEnvComputed(this, key, `__bound__.${findIndex(this.__bound__, key)}`);
    set(this, key, value);
    return get(this, key);
  }
}

/*
 * Given a value and an environment, returns a wrapped version of that value that
 * will resolve any Binding instances against the given environment.
 */
export function wrap(value, env) {
  if (Array.isArray(value) || value instanceof ArrayValue) {
    return new ArrayValue(value, env);
  } else if (value && typeof value === 'object' || value instanceof Value) {
    return new Value(value, env);
  } else {
    return value;
  }
}

/*
 * Given a wrapped value, returns the underlying one.
 */
export function unwrap(value) {
  if (value instanceof ArrayValue || value instanceof Value) {
    return value.__wrapped__;
  } else {
    return value;
  }
}

const hasProperty = Function.call.bind(Object.prototype.hasOwnProperty);

function findIndex(bindings, key) {
  for (let i = 0, len = bindings.length; i < len; i++) {
    if (hasProperty(bindings[i], key)) {
      return i;
    }
  }
  return 0;
}
