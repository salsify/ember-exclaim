import { set, get } from '@ember/object';
import { A } from '@ember/array';
import ArrayProxy from '@ember/array/proxy';
import Binding from 'ember-exclaim/-private/binding';
import { wrap } from './index';

/*
 * Wraps an array, resolving any Bindings in it when requested to the corresponding
 * paths in the given environment.
 */
export default class EnvironmentArray extends ArrayProxy {
  constructor(data, env, key) {
    super({ content: data });
    this.__wrapped__ = (data instanceof EnvironmentArray) ? data.__wrapped__ : A(data);
    this.__env__ = env;
    this.__key__ = key;
  }

  // Overriding objectAt (rather than objectAtContent) in order to avoid
  // the caching that ArrayProxy does in newer versions of Ember.
  objectAt(index) {
    const item = this.__wrapped__.objectAt(index);
    if (item instanceof Binding) {
      return get(this.__env__, item.path.join('.'));
    } else {
      return wrap(item, this.__env__, this.__key__ && `${this.__key__}.${index}`);
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
