import { set, get } from '@ember/object';
import createEnvComputed from './create-env-computed';

/*
 * Wraps an object, resolving any Bindings in it when requested to the corresponding
 * paths in the given environment.
 */
export default class EnvironmentData {
  static create({ data, env, key }) {
    let instance = new EnvironmentData();
    instance.__wrapped__ = (data instanceof EnvironmentData) ? data.__wrapped__ : data;
    instance.__env__ = env;
    instance.__key__ = key;
    return instance;
  }

  get(key) {
    return get(this, key);
  }

  set(key, value) {
    return set(this, key, value);
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
