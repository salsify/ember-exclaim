import { wrap } from 'ember-exclaim';

export default class ComponentSpec {
  constructor(path, config, componentMeta) {
    this.path = path;
    this.config = config;
    this.componentMeta = componentMeta;
  }

  resolveConfig(env) {
    return wrap(this.config, env);
  }
}
