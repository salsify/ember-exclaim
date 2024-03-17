import { bindData } from './env/index.js';

export class Binding {
  constructor(path) {
    this.path = path.split('.');
  }
}

export class ComponentSpec {
  constructor(component, config, meta) {
    this.component = component;
    this.config = config;
    this.meta = meta;
  }

  resolveConfig(env) {
    return bindData(this.config, env);
  }
}

export class HelperSpec {
  constructor(helper, config, meta) {
    this.helper = helper;
    this.config = config;
    this.meta = meta;
    this.bindings = discoverBindings(config);
  }

  invoke(env) {
    let { helper, config } = this;
    return helper(bindData(config, env), env);
  }
}

function discoverBindings(config) {
  let bindings = [];
  if (Array.isArray(config)) {
    config.forEach((item) => {
      bindings.push(...discoverBindings(item));
    });
  } else if (
    config &&
    typeof config === 'object' &&
    Object.getPrototypeOf(config) === Object.prototype
  ) {
    Object.keys(config).forEach((key) => {
      bindings.push(...discoverBindings(config[key]));
    });
  } else if (config instanceof Binding) {
    bindings.push(config);
  } else if (config instanceof HelperSpec) {
    bindings.push(...config.bindings);
  }
  return bindings;
}
