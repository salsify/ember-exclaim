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
export default class EnvironmentData extends EmberObject.extend(Ember.Evented) {
  constructor(data, env, key) {
    super();
    this.__wrapped__ = (data instanceof EnvironmentData) ? data.__wrapped__ : data;
    this.__env__ = env;
    this.__key__ = key;
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
