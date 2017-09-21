import { wrap } from 'ember-exclaim';

export default class ComponentSpec {
  constructor(path, config, meta) {
    this.path = path;
    this.config = config;
    this.meta = meta;
  }

  resolveConfig(env) {
    return wrap(this.config, env);
  }
}
