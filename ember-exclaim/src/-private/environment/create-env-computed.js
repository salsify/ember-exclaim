import { alias } from '@ember/object/computed';
import { computed, set, get, defineProperty } from '@ember/object';
import Binding from '../binding';
import HelperSpec from '../helper-spec';
import { wrap } from '../environment';
import { extractKey } from './utils';

/*
 * For an object proxying some other content in an exclaim Environment, this function
 * creates a computed property under the given key on that object that will handle
 * resolution and traversal of exclaim Bindings.
 *
 * The `valueRoot` parameter is the key on the host under which the proxied content is present.
 * That is, if I call `get(host, 'foo')`, the computed will ultimately end up returning
 * get(host, valueRoot + '.foo').
 *
 * The `envRoot` parameter is the key on the host under exclaim Bindings will be resolved.
 * That is, if I get a value on the host that turns out to be a Binding, the ultimate returned
 * value will be the value at that Binding's path on whatever object is in envRoot. (Note that
 * Environment instances are their own binding resolution source, so they have no envRoot.)
 */
export default function createComputed(host, key, valueRoot, envRoot) {
  const fullHostKey = `${valueRoot}.${key}`;
  const result = get(host, fullHostKey);
  const env = envRoot ? get(host, envRoot) : host;

  if (result instanceof Binding) {
    // If it's a Binding, we can just return an alias for the given value on the environment
    defineProperty(host, key, alias(envPath(envRoot, result)));
  } else if (result instanceof HelperSpec) {
    // If it's a helper we set up a computed that reflects its calculated result
    defineProperty(
      host,
      key,
      computed(...result.bindings.map((binding) => envPath(envRoot, binding)), {
        get() {
          return result.invoke(env);
        },

        set(key, value) {
          return value;
        },
      })
    );
  } else {
    // Otherwise, we depend on the value of that key on the host object
    const hostKey = extractKey(host);
    const fullEnvKey = hostKey ? `${hostKey}.${key}` : key;
    defineProperty(
      host,
      key,
      computed(...determineDependentKeys(result, key, valueRoot, envRoot), {
        get() {
          return wrap(get(host, fullHostKey), env, fullEnvKey);
        },
        set(key, value) {
          set(host, fullHostKey, value);
          env.trigger('change', fullEnvKey);
          return wrap(get(host, fullHostKey), env, fullEnvKey);
        },
      })
    );
  }
}

// For arrays containing bindings, the calculated array value itself depends on all those bound paths
function determineDependentKeys(value, key, valueRoot, envRoot) {
  if (!Array.isArray(value)) {
    return [`${valueRoot}.${key}`];
  } else {
    const bindings = value.filter((element) => element instanceof Binding);
    const bindingKeys = bindings.map((binding) => envPath(envRoot, binding));
    return [`${valueRoot}.${key}.[]`, ...bindingKeys];
  }
}

function envPath(envRoot, binding) {
  const bindingPath = binding.path.join('.');
  return envRoot ? `${envRoot}.${bindingPath}` : bindingPath;
}
