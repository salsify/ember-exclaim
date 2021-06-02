import MutableArray from '@ember/array/mutable';
import { isHTMLSafe } from '@ember/string';
import Environment from '.';
import Binding from '../binding';
import HelperSpec from '../helper-spec';
import EnvironmentArray from './array';
import EnvironmentData from './data';
import { extractKey } from './utils';

export type Primitive = symbol | string | number | boolean | null | undefined;

export type Unwrapped<T> = T extends EnvironmentData<infer U>
  ? Unwrapped<U>
  : T extends EnvironmentArray<infer U>
  ? MutableArray<Unwrapped<U>>
  : {
      [K in keyof T]: Unwrapped<T[K]> | Binding | HelperSpec;
    };

export type Wrapped<T> = T extends Primitive
  ? T
  : T extends Array<infer U> | EnvironmentArray<infer U>
  ? EnvironmentArray<U>
  : T extends EnvironmentData<infer U>
  ? EnvironmentData<U>
  : EnvironmentData<T>;

/*
 * Given a piece of data and an environment, returns a wrapped version of that value that
 * will resolve any Binding instances against the given environment.
 */
export function wrap<T>(data: T, env: Environment, key?: string): Wrapped<T> {
  // Persist the original environment key if we're re-wrapping a new one
  const realKey = extractKey(data) || key;
  if (Array.isArray(data) || data instanceof EnvironmentArray) {
    return EnvironmentArray.create({ data, env, key: realKey }) as Wrapped<T>;
  } else if (
    (data && typeof data === 'object' && !isHTMLSafe(data)) ||
    data instanceof EnvironmentData
  ) {
    return EnvironmentData.create({ data, env, key: realKey }) as Wrapped<T>;
  } else {
    return data as Wrapped<T>;
  }
}

/*
 * Given a wrapped piece of data, returns the underlying one. Note that this value, if not
 * a primitive, may include unresolved bindings or helper references.
 */
export function unwrap<T>(data: T): Unwrapped<T> {
  if (data instanceof EnvironmentArray) {
    return data['__wrapped__'] as unknown as Unwrapped<T>;
  } else if (data instanceof EnvironmentData) {
    return data['__wrapped__'] as Unwrapped<T>;
  } else {
    return data as Unwrapped<T>;
  }
}
