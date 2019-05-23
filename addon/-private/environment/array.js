import { set, get } from '@ember/object';
import { A } from '@ember/array';
import ArrayProxy from '@ember/array/proxy';
import Binding from 'ember-exclaim/-private/binding';
import HelperSpec from 'ember-exclaim/-private/helper-spec';
import { wrap } from './index';
import { extractKey } from './utils';
import { defineProperty, computed } from '@ember/object';

/*
 * Wraps an array, resolving any Bindings in it when requested to the corresponding
 * paths in the given environment.
 */
export default class EnvironmentArray extends ArrayProxy {
  static create({ data, env, key } = {}) {
    let instance = super.create({ content: data });
    instance.__wrapped__ = data instanceof EnvironmentArray ? data.__wrapped__ : A(data);
    instance.__env__ = env;
    instance.__key__ = key;
    return instance;
  }

  unknownProperty(key) {
    if (/^\d+$/.test(key)) {
      defineIndexProperty(this, key);
      return get(this, key);
    } else {
      return this[key];
    }
  }

  setUnknownProperty(key, value) {
    if (/^\d+$/.test(key)) {
      defineIndexProperty(this, key);
      set(this, key, value);
      return get(this, key);
    } else {
      return this[key] = value;
    }
  }

  // Overriding objectAt (rather than objectAtContent) in order to avoid
  // the caching that ArrayProxy does in newer versions of Ember.
  objectAt(index) {
    const item = this.__wrapped__.objectAt(index);
    if (item instanceof Binding) {
      return get(this.__env__, item.path.join('.'));
    } else if (item instanceof HelperSpec) {
      return item.invoke(this.__env__);
    } else {
      let key = extractKey(this);
      return wrap(item, this.__env__, key && `${key}.${index}`);
    }
  }

  replaceContent(index, amount, items) {
    for (let i = 0; i < amount; i++) {
      const item = this.__wrapped__.objectAt(i + index);
      if (item instanceof Binding) {
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

function defineIndexProperty(host, index) {
  defineProperty(host, index, computed('__wrapped__.[]', {
    get() {
      return host.__wrapped__.objectAt(index);
    },
    set(_key, value) {
      host._wrapped__.setObjectAt(index, value);
      return value;
    }
  }));
}
