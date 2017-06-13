import Ember from 'ember';
import Binding from './binding';

const {
  get,
  set,
  makeArray,
  computed,
  A,
  ArrayProxy,
  Object: EmberObject,
} = Ember;

export default class Environment extends EmberObject {
  constructor(bound) {
    super();
    this.__bound__ = makeArray(bound);
  }

  extend(values) {
    return new Environment([values, ...this.__bound__]);
  }

  unknownProperty(key) {
    createComputed(this, key, `__bound__.${findIndex(this.__bound__, key)}`);
    return get(this, key);
  }

  setUnknownProperty(key, value) {
    createComputed(this, key, `__bound__.${findIndex(this.__bound__, key)}`);
    set(this, key, value);
    return get(this, key);
  }
}

export function wrap(value, env) {
  if (Array.isArray(value) || value instanceof ArrayValue) {
    return new ArrayValue(value, env);
  } else if (value && typeof value === 'object' || value instanceof Value) {
    return new Value(value, env);
  } else {
    return value;
  }
}

export function unwrap(value) {
  if (value instanceof ArrayValue || value instanceof Value) {
    return value.__wrapped__;
  } else {
    return value;
  }
}

class Value extends EmberObject {
  constructor(value, env) {
    super();
    this.__wrapped__ = (value instanceof Value) ? value.__wrapped__ : value;
    this.__env__ = env;
  }

  unknownProperty(key) {
    createComputed(this, key, '__wrapped__', '__env__');
    return get(this, key);
  }

  setUnknownProperty(key, value) {
    createComputed(this, key, '__wrapped__', '__env__');
    set(this, key, value);
    return get(this, key);
  }

  toString() {
    return `${this.__wrapped__}`;
  }
}

class ArrayValue extends ArrayProxy {
  constructor(value, env) {
    super({ content: value });
    this.__wrapped__ = (value instanceof ArrayValue) ? value.__wrapped__ : A(value);
    this.__env__ = env;
  }

  objectAtContent(index) {
    const item = this.__wrapped__.objectAt(index);
    if (item instanceof Binding) {
      if (item.path.length) {
        return get(this.__env__, item.path.join('.'));
      }
    } else {
      return wrap(item, this.__env__);
    }
  }

  // technically private on ArrayProxy
  replaceContent(index, amount, items) {
    for (let i = 0; i < amount; i++) {
      const item = this.__wrapped__.objectAt(i + index);
      if (item instanceof Binding) {
        // TODO how to handle writing to an unbound identifier?
        set(this.__env__, item.path.join('.'), items[i]);
      } else {
        // Being lazy here and only `replace`-ing one at a time rather than doing the bookkeeping to group changes
        this.__wrapped__.replace(i + index, 1, [items[i]]);
      }
    }

    if (amount > items.length) {
      this.__wrapped__.replace(index + items.length, amount - items.length, []);
    } else if (items.length > amount) {
      this.__wrapped__.replace(index + items.length, 0, items.slice(amount));
    }
  }

  toString() {
    return `${this.__wrapped__}`;
  }
}

function createComputed(host, key, valueRoot, envRoot) {
  const fullKey = `${valueRoot}.${key}`;
  const result = get(host, fullKey);
  const env = envRoot ? get(host, envRoot) : host;

  if (result instanceof Binding) {
    host[key] = computed.alias([envRoot, ...result.path].filter(Boolean).join('.'));
  } else {
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

const hasOwnProperty = Function.prototype.call.bind(Object.prototype.hasOwnProperty);

function determineDependentKeys(value, key, valueRoot, envRoot) {
  if (!Array.isArray(value)) {
    return [`${valueRoot}.${key}`];
  } else {
    const bindings = value.filter(element => element instanceof Binding);
    const bindingKeys = bindings.map(binding => [envRoot, ...binding.path].filter(Boolean).join('.'));
    return [`${valueRoot}.${key}.[]`, ...bindingKeys];
  }
}

function findIndex(bindings, key) {
  for (let i = 0, len = bindings.length; i < len; i++) {
    if (hasOwnProperty(bindings[i], key)) {
      return i;
    }
  }
  return 0;
}
