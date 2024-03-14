/* eslint-disable ember/no-computed-properties-in-native-classes */
import { makeArray } from '@ember/array';
import { set, get, computed, defineProperty } from '@ember/object';
import { resolveCanonicalPath } from './paths';
import { bindComputeds } from './bind-computeds';

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

  bind(data) {
    return bindComputeds(data, this);
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

    return this.__resolveFieldMeta__(resolveCanonicalPath(object, path));
  }

  unknownProperty(key) {
    defineProperty(this, key, broadcastingAlias(this, key));
    return get(this, key);
  }

  setUnknownProperty(key, value) {
    defineProperty(this, key, broadcastingAlias(this, key));
    return set(this, key, value);
  }
}

function broadcastingAlias(host, key) {
  const fullPath = `__bound__.${findIndex(host.__bound__, key)}.${key}`;
  return computed(fullPath, {
    get() {
      return get(this, fullPath);
    },
    set(_, value) {
      let result = set(this, fullPath, value);
      this.trigger('change', key);
      return result;
    },
  });
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
