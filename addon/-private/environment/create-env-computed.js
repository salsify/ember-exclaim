import Ember from 'ember';
import Binding from 'ember-exclaim/-private/binding';
import { wrap } from './index';
const {
  get,
  set,
  computed,
} = Ember;

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
  const fullKey = `${valueRoot}.${key}`;
  const result = get(host, fullKey);
  const env = envRoot ? get(host, envRoot) : host;

  if (result instanceof Binding) {
    // If it's a Binding, we can just return an alias for the given value on the environment
    host[key] = computed.alias(envPath(envRoot, result));
  } else {
    // Otherwise, we depend on the value of that key on the host object
    host[key] = computed(...determineDependentKeys(result, key, valueRoot, envRoot), {
      get() {
        return wrap(get(host, fullKey), env);
      },
      set(key, value) {
        set(host, fullKey, value);
        return wrap(get(host, fullKey), env);
      }
    });
  }
}

// For arrays containing bindings, the calculated array value itself depends on all those bound paths
function determineDependentKeys(value, key, valueRoot, envRoot) {
  if (!Array.isArray(value)) {
    return [`${valueRoot}.${key}`];
  } else {
    const bindings = value.filter(element => element instanceof Binding);
    const bindingKeys = bindings.map(binding => envPath(envRoot, binding));
    return [`${valueRoot}.${key}.[]`, ...bindingKeys];
  }
}

function envPath(envRoot, binding) {
  const bindingPath = binding.path.join('.');
  return envRoot ? `${envRoot}.${bindingPath}` : bindingPath;
}