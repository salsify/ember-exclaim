import Ember from 'ember';
import createEnvComputed from './create-env-computed';
import EnvironmentData from './data';
import EnvironmentArray from './array';

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
 * Given a piece of data and an environment, returns a wrapped version of that value that
 * will resolve any Binding instances against the given environment.
 */
export function wrap(data, env) {
  if (Array.isArray(data) || data instanceof EnvironmentArray) {
    return new EnvironmentArray(data, env);
  } else if (data && typeof data === 'object' || data instanceof EnvironmentData) {
    return new EnvironmentData(data, env);
  } else {
    return data;
  }
}

/*
 * Given a wrapped piece of data, returns the underlying one.
 */
export function unwrap(data) {
  if (data instanceof EnvironmentArray || data instanceof EnvironmentData) {
    return data.__wrapped__;
  } else {
    return data;
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
