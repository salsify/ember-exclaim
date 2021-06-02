import { isArray } from '@ember/array';
import { set, get } from '@ember/object';
import createEnvComputed from './create-env-computed';
import EnvironmentData from './data';
import EnvironmentArray from './array';
import Binding from '../binding';
import { extractKey } from './utils';

export type EventListener = (event: unknown) => void;

export type Assign<T, U> = Omit<T, keyof U> & U;

/*
 * Wraps an object that may contain exclaim Bindings, automatically resolving
 * them to their ultimate values. Note that any non-primitive value returned
 * from a call `get(env, 'some.key')` will itself be wrapped in a proxy allowing
 * it to resolve subsequent calls to get its own values.
 */
export default class Environment<T = unknown, Meta = unknown> {
  private declare __bound__: Array<Partial<T>>;
  private declare __listeners__: Record<string, Array<EventListener>>;
  private declare __resolveFieldMeta__: (field: string) => Meta | undefined;

  public constructor(
    bound: Partial<T> | Array<Partial<T>>,
    metaForField: (field: string) => Meta | undefined = () => undefined
  ) {
    this.__listeners__ = Object.create(null);
    this.__bound__ = makeArray(bound);
    this.__resolveFieldMeta__ = metaForField;
  }

  public get(key: string): unknown {
    return get(this, key as never);
  }

  public set(key: string, value: never): unknown {
    return set(this, key as never, value);
  }

  public on(type: string, listener: EventListener): void {
    const listeners =
      this.__listeners__[type] || (this.__listeners__[type] = []);
    listeners.push(listener);
  }

  public trigger(type: string, event: unknown): void {
    const listeners = this.__listeners__[type] || [];
    for (let i = 0, len = listeners.length; i < len; i++) {
      listeners[i](event);
    }
  }

  public extend<U>(values: U): Environment<Assign<T, U>, Meta> {
    return new Environment(
      [values, ...this.__bound__] as Array<Partial<Assign<T, U>>>,
      this.__resolveFieldMeta__
    );
  }

  public metaForField(object: unknown, path: string): Meta | undefined;
  public metaForField(path: string): Meta | undefined;
  public metaForField(object: unknown, path?: string): unknown {
    if (!path) {
      path = object as string;
      object = this;
    }

    const resolveFieldMeta = this.__resolveFieldMeta__;
    const resolvedPath = resolvePath(object, path);
    return resolvedPath ? resolveFieldMeta(resolvedPath) : undefined;
  }

  public unknownProperty(key: string): unknown {
    createEnvComputed(this, key, `__bound__.${findIndex(this.__bound__, key)}`);
    return get(this, key as never);
  }

  public setUnknownProperty(key: string, value: unknown): unknown {
    createEnvComputed(this, key, `__bound__.${findIndex(this.__bound__, key)}`);
    set(this, key as never, value as never);
    return get(this, key as never);
  }
}

export function resolvePath(object: unknown, path: string): string | undefined {
  if (!path) return;

  const parts = path.split('.');
  const key = parts[parts.length - 1];
  const host =
    parts.length > 1
      ? get(object, parts.slice(0, -1).join('.') as never)
      : object;

  if (host instanceof Environment) {
    return (
      canonicalizeBinding(
        host,
        host['__bound__'][findIndex(host['__bound__'], key)][key]
      ) || key
    );
  } else if (host instanceof EnvironmentData) {
    const canonicalized = canonicalizeBinding(
      host['__env__'],
      host['__wrapped__'][key]
    );
    const hostKey = extractKey(host);
    return canonicalized || (hostKey && `${hostKey}.${key}`);
  } else if (host instanceof EnvironmentArray) {
    throw new Error('Cannot canonicalize the path to an array element itself.');
  }

  return undefined;
}

function canonicalizeBinding(
  env: Environment,
  value: unknown
): string | undefined {
  if (value instanceof Binding) {
    return resolvePath(env, value.path.join('.'));
  } else if (
    value instanceof EnvironmentData ||
    value instanceof EnvironmentArray
  ) {
    // We can wind up with wrapped values IN wrapped values in cases like `env.extend({ foo: env.get('bar') })`
    // When this happens, we want to canonicalize on the original key
    const key = extractKey(value);
    if (key) {
      return resolvePath(env, key);
    }
  }

  return undefined;
}

const hasProperty = Function.call.bind(Object.prototype.hasOwnProperty);

function findIndex(
  bindings: Array<Record<string, unknown>>,
  key: string
): number {
  for (let i = 0, len = bindings.length; i < len; i++) {
    if (hasProperty(bindings[i], key)) {
      return i;
    }
  }
  return 0;
}

function makeArray<T>(value: Array<T> | T): Array<T> {
  if (value === null || value === undefined) return [];
  return isArray(value) ? value : [value];
}
