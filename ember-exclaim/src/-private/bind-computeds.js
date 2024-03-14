/* eslint-disable ember/no-computed-properties-in-native-classes */
import { get, set, defineProperty, computed } from '@ember/object';
import { deprecate } from '@ember/debug';
import { alias } from '@ember/object/computed';
import { HelperSpec, Binding } from './ui-spec.js';
import { recordCanonicalPath } from './paths.js';

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
export function bindComputeds(data, env) {
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
    recordCanonicalPath(host, key, env, value.path.join('.'));
    defineProperty(
      host,
      key,
      alias(`${getEnvKey(host, env)}.${value.path.join('.')}`)
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
    host[key] = bindComputeds(value, env);
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
