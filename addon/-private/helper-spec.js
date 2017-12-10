import Binding from './binding';
import { wrap } from 'ember-exclaim';

export default class HelperSpec {
  constructor(helper, config, meta) {
    this.helper = helper;
    this.config = config;
    this.meta = meta;
    this.bindings = discoverBindings(config);
  }

  invoke(env) {
    let { helper, config } = this;
    return helper(wrap(config, env), env);
  }
}

function discoverBindings(config) {
  let bindings = [];
  if (Array.isArray(config)) {
    config.forEach((item) => {
      bindings.push(...discoverBindings(item));
    });
  } else if (config && typeof config === 'object' && Object.getPrototypeOf(config) === Object.prototype) {
    Object.keys(config).forEach((key) => {
      bindings.push(...discoverBindings(config[key]));
    });
  } else if (config instanceof Binding) {
    bindings.push(config);
  }
  return bindings;
}
