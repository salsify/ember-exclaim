import { wrap } from 'ember-exclaim';

export default class ComponentSpec {
  constructor(path, config) {
    this.path = path;
    this.config = config;
  }

  resolveConfig(env) {
    return wrap(this.config, env);
  }
}
