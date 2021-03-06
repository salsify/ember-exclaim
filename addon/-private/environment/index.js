import { makeArray } from '@ember/array';
import { set, get } from '@ember/object';
import { isHTMLSafe } from '@ember/string';
import createEnvComputed from './create-env-computed';
import EnvironmentData from './data';
import EnvironmentArray from './array';
import Binding from '../binding';
import { extractKey } from './utils';

/*
 * Wraps an object that may contain exclaim Bindings, automatically resolving
 * them to their ultimate values. Note that any non-primitive value returned
 * from a call `get(env, 'some.key')` will itself be wrapped in a proxy allowing
 * it to resolve subsequent calls to get its own values.
 */
export default class Environment {
  constructor(bound, metaForField) {
    this.__listeners__ = Object.create(null);
    this.__bound__ = makeArray(bound);
    this.__resolveFieldMeta__ =
      typeof metaForField === 'function' ? metaForField : () => {};
  }

  get(key) {
    return get(this, key);
  }

  set(key, value) {
    return set(this, key, value);
  }

  on(type, listener) {
    let listeners = this.__listeners__[type] || (this.__listeners__[type] = []);
    listeners.push(listener);
  }

  trigger(type, event) {
    let listeners = this.__listeners__[type] || [];
    for (let i = 0, len = listeners.length; i < len; i++) {
      listeners[i](event);
    }
  }

  extend(values) {
    return new Environment(
      [values, ...this.__bound__],
      this.__resolveFieldMeta__
    );
  }

  metaForField(object, path) {
    if (!path) {
      path = object;
      object = this;
    }

    const resolveFieldMeta = this.__resolveFieldMeta__;
    const resolvedPath = resolvePath(object, path);
    return resolveFieldMeta(resolvedPath);
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
export function wrap(data, env, key) {
  // Persist the original environment key if we're re-wrapping a new one
  const realKey = extractKey(data) || key;
  if (Array.isArray(data) || data instanceof EnvironmentArray) {
    return EnvironmentArray.create({ data, env, key: realKey });
  } else if (
    (data && typeof data === 'object' && !isHTMLSafe(data)) ||
    data instanceof EnvironmentData
  ) {
    return EnvironmentData.create({ data, env, key: realKey });
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

export function resolvePath(object, path) {
  if (!path) return;

  const parts = path.split('.');
  const key = parts[parts.length - 1];
  const host =
    parts.length > 1 ? get(object, parts.slice(0, -1).join('.')) : object;
  if (host instanceof Environment) {
    return (
      canonicalizeBinding(
        host,
        host.__bound__[findIndex(host.__bound__, key)][key]
      ) || key
    );
  } else if (host instanceof EnvironmentData) {
    const canonicalized = canonicalizeBinding(
      host.__env__,
      host.__wrapped__[key]
    );
    const hostKey = extractKey(host);
    return canonicalized || (hostKey && `${hostKey}.${key}`);
  } else if (host instanceof EnvironmentArray) {
    throw new Error('Cannot canonicalize the path to an array element itself.');
  }
}

function canonicalizeBinding(env, value) {
  if (value instanceof Binding) {
    return resolvePath(env, value.path.join('.'));
  } else if (
    value instanceof EnvironmentData ||
    value instanceof EnvironmentArray
  ) {
    // We can wind up with wrapped values IN wrapped values in cases like `env.extend({ foo: env.get('bar') })`
    // When this happens, we want to canonicalize on the original key
    return resolvePath(env, extractKey(value));
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
