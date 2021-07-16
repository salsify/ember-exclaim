import Environment from './-private/environment';
import EnvironmentData from './-private/environment/data';

export { wrap, unwrap, read, write } from './-private/environment/wrapping';

export type { ImplementationMap } from './-private/build-spec-processor';
export type { default as Environment } from './-private/environment';
export type { default as ComponentSpec } from './-private/component-spec';
export type { default as HelperSpec } from './-private/helper-spec';

export type ExclaimComponentArgs<T, Env = unknown, Meta = unknown> = {
  config: EnvironmentData<T>;
  env: Environment<Env, Meta>;
};
