import Binding from './binding';
import { wrap } from 'ember-exclaim';
import Environment from './environment';

export type HelperFunction = (config: never, env: Environment) => unknown;

export default class HelperSpec<
  T extends HelperFunction = HelperFunction,
  Meta = unknown
> {
  public readonly bindings: ReadonlyArray<Binding>;

  public constructor(
    public readonly helper: T,
    public readonly config: unknown,
    public readonly meta?: Meta
  ) {
    this.bindings = discoverBindings(config);
  }

  public invoke(env: Environment): unknown {
    const { helper, config } = this;
    return helper(wrap(config, env) as never, env);
  }
}

function discoverBindings(config: unknown): Array<Binding> {
  const bindings = [];
  if (Array.isArray(config)) {
    config.forEach((item) => {
      bindings.push(...discoverBindings(item));
    });
  } else if (
    typeof config === 'object' &&
    config !== null &&
    Object.getPrototypeOf(config) === Object.prototype
  ) {
    Object.keys(config).forEach((key: keyof typeof config) => {
      bindings.push(...discoverBindings(config[key]));
    });
  } else if (config instanceof Binding) {
    bindings.push(config);
  } else if (config instanceof HelperSpec) {
    bindings.push(...config.bindings);
  }
  return bindings;
}
