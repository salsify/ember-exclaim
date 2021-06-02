import { set, get } from '@ember/object';
import Environment from '.';
import createEnvComputed from './create-env-computed';

export type EnvironmentDataInit<T> = {
  data: EnvironmentData<T> | T;
  env: Environment;
  key?: string;
};

/*
 * Wraps an object, resolving any Bindings in it when requested to the corresponding
 * paths in the given environment.
 */
export default class EnvironmentData<T> {
  private declare __wrapped__: T;
  private declare __env__: Environment;
  private declare __key__: string | undefined;

  static create<T>(init: EnvironmentDataInit<T>): EnvironmentData<T> {
    const { data, env, key } = init;
    const instance = new EnvironmentData<T>();

    instance.__wrapped__ =
      data instanceof EnvironmentData ? data.__wrapped__ : data;
    instance.__env__ = env;
    instance.__key__ = key;

    return instance;
  }

  public get(key: keyof this): unknown {
    return get(this, key as never);
  }

  public set(key: keyof this, value: never): unknown {
    return set(this, key, value);
  }

  public unknownProperty(key: string): unknown {
    createEnvComputed(this, key, '__wrapped__', '__env__');
    return get(this, key as never);
  }

  public setUnknownProperty(key: string, value: unknown): unknown {
    createEnvComputed(this, key, '__wrapped__', '__env__');
    set(this, key as never, value as never);
    return get(this, key as never);
  }

  public toString(): string {
    return `${this.__wrapped__}`;
  }
}
