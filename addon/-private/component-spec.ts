import { wrap } from 'ember-exclaim';
import Environment, { Wrapped } from './environment';

export default class ComponentSpec<T, Meta> {
  constructor(
    public readonly path: string,
    public readonly config: T,
    public readonly meta: Meta
  ) {}

  public resolveConfig(env: Environment<unknown, Meta>): Wrapped<T> {
    return wrap(this.config, env);
  }
}
