import Environment from './environment';
import { wrap, Wrapped } from './environment/wrapping';

export default class ComponentSpec<T = unknown, Meta = unknown> {
  constructor(
    public readonly path: string,
    public readonly config: T,
    public readonly meta?: Meta
  ) {}

  public resolveConfig(env: Environment<unknown, Meta>): Wrapped<T> {
    return wrap(this.config, env);
  }
}
