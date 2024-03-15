/* eslint-disable ember/no-computed-properties-in-native-classes */
import { get, set, defineProperty, computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { deprecate } from '@ember/debug';
import { HelperSpec, Binding } from '../ui-spec.js';
import { recordCanonicalPath } from '../paths.js';
import { triggerChange } from './index.js';

// This module contains implementations of key operations
// (namely `extend` and `bind`) for environments whose
// reactivity model is based on Ember computeds. The idea
// is that we should be able to make a similar (but simpler)
// one that just uses native getters and setters to instead
// work more cleanly with `@tracked` data and have `ExclaimUi`
// decide which version to pass to `makeEnv` based on an arg.

/**
 * Returns wrapper around the given environment object that
 * will essentially behave exactly the same unless one of
 * the added/overridden fields is accessed instead.
 */
export function extend(env, extraFields) {
  return new Proxy(
    {},
    {
      get(target, key, receiver) {
        if (key in extraFields) {
          return Reflect.get(extraFields, key, receiver);
        } else {
          ensureAlias(target, key, env);
          return Reflect.get(target, key, receiver);
        }
      },
      set(target, key, value, receiver) {
        if (key in extraFields) {
          return Reflect.set(extraFields, key, value, receiver);
        } else {
          ensureAlias(target, key, env);
          return Reflect.set(target, key, value, receiver);
        }
      },
    }
  );
}

function ensureAlias(target, key, env) {
  if (typeof key === 'string' && key !== 'isDestroyed' && !(key in target)) {
    defineProperty(target, key, alias(`${getEnvKey(target, env)}.${key}`));
  }
}

/**
 * Given a piece of a UI spec `data` and an environment `env`,
 * locates all `Binding` and `HelperSpec` values and installs
 * Ember computed properties with appropriate dependencies
 * in their place.
 *
 * Note that this does not recurse through `ComponentSpec` values,
 * as the embedded config within those should not be bound until
 * the component spec is yielded and we know what environment to
 * bind it to.
 */
export function bind(data, env) {
  if (Array.isArray(data)) {
    let result = Array(data.length);
    for (let i = 0; i < data.length; i++) {
      bindKey(result, i, data[i], env);
    }
    return result;
  } else if (
    typeof data === 'object' &&
    data &&
    Object.getPrototypeOf(data) === Object.prototype
  ) {
    let result = new ConfigObject();
    for (let key of Object.keys(data)) {
      bindKey(result, key, data[key], env);
    }
    return result;
  } else {
    return data;
  }
}

function bindKey(host, key, value, env) {
  if (value instanceof Binding) {
    const bindingPath = value.path.join('.');
    const fullKey = `${getEnvKey(host, env)}.${bindingPath}`;

    recordCanonicalPath(host, key, env, bindingPath);
    defineProperty(
      host,
      key,
      computed(fullKey, {
        get() {
          return get(this, fullKey);
        },
        set(_, value) {
          let result = set(this, fullKey, value);
          triggerChange(env, bindingPath);
          return result;
        },
      })
    );
  } else if (value instanceof HelperSpec) {
    const envKey = getEnvKey(host, env);
    const dependentKeys = value.bindings.map(
      (binding) => `${envKey}.${binding.path.join('.')}`
    );
    defineProperty(
      host,
      key,
      computed(...dependentKeys, { get: () => value.invoke(env) })
    );
  } else {
    host[key] = bind(value, env);
  }
}

const envKeys = new WeakMap();
function getEnvKey(object, environment) {
  const key = envKeys.get(object);
  if (key) {
    return key;
  }

  const envKey = `-environment-${Math.random().toString().slice(2)}`;
  Object.defineProperty(object, envKey, {
    value: environment,
    enumerable: false,
    writable: false,
  });
  envKeys.set(object, envKey);
  return envKey;
}

class ConfigObject {
  get(key) {
    deprecate(
      'Calling `.get()` on UI config objects is deprecated. Use normal direct property access.',
      true,
      {
        id: 'ember-exclaim.get-set',
        for: 'ember-exclaim',
        since: { available: '2.0.0', enabled: '2.0.0' },
        until: '3.0.0',
      }
    );
    return get(this, key);
  }

  set(key, value) {
    deprecate(
      'Directly calling `.set()` on UI config objects is deprecated. Use the importable `set` or set via a parent object.',
      true,
      {
        id: 'ember-exclaim.get-set',
        for: 'ember-exclaim',
        since: { available: '2.0.0', enabled: '2.0.0' },
        until: '3.0.0',
      }
    );
    return set(this, key, value);
  }
}
