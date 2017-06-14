import Ember from 'ember';
import createEnvComputed from './create-env-computed';
const {
  get,
  set,
  Object: EmberObject,
} = Ember;

/*
 * Wraps an object, resolving any Bindings in it when requested to the corresponding
 * paths in the given environment.
 */
export default class Value extends EmberObject {
  constructor(value, env) {
    super();
    this.__wrapped__ = (value instanceof Value) ? value.__wrapped__ : value;
    this.__env__ = env;
  }

  unknownProperty(key) {
    createEnvComputed(this, key, '__wrapped__', '__env__');
    return get(this, key);
  }

  setUnknownProperty(key, value) {
    createEnvComputed(this, key, '__wrapped__', '__env__');
    set(this, key, value);
    return get(this, key);
  }

  toString() {
    return `${this.__wrapped__}`;
  }
}
