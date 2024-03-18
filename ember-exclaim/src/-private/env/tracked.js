import { TrackedObject } from 'tracked-built-ins';
import { HelperSpec, Binding } from '../ui-spec.js';
import { recordCanonicalPath } from '../paths.js';
import { triggerChange } from './index.js';

// This module contains implementations of key operations
// (namely `extend` and `bind`) for environments whose
// reactivity model is based on native getters and setters
// and therefore works cleanly with `@tracked` fields in
// environments.

/**
 * Returns wrapper around the given environment object that
 * will essentially behave exactly the same unless one of
 * the added/overridden fields is accessed instead.
 */
export function extend(env, extraFields) {
  const storage = new TrackedObject(extraFields);
  return new Proxy(env, {
    get(target, key) {
      return Reflect.get(key in storage ? storage : target, key);
    },
    set(target, key, value) {
      return Reflect.set(key in storage ? storage : target, key, value);
    },
  });
}

/**
 * Given a piece of a UI spec `data` and an environment `env`,
 * locates all `Binding` and `HelperSpec` values and installs
 * appropriate getters and setters in their place.
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
    let result = {};
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

    recordCanonicalPath(host, key, env, bindingPath);
    Object.defineProperty(host, key, {
      enumerable: true,
      get() {
        return value.path.reduce((object, key) => object[key], env);
      },
      set(fieldValue) {
        const parentPath = value.path.slice(0, -1);
        const parent = parentPath.reduce((object, key) => object[key], env);
        parent[value.path.at(-1)] = fieldValue;
        triggerChange(env, bindingPath);
      },
    });
  } else if (value instanceof HelperSpec) {
    Object.defineProperty(host, key, {
      enumerable: true,
      get() {
        return value.invoke(env);
      },
    });
  } else {
    host[key] = bind(value, env);
  }
}
