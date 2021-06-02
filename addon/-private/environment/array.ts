import { set, get } from '@ember/object';
import { A } from '@ember/array';
import type MutableArray from '@ember/array/mutable';
import ArrayProxy from '@ember/array/proxy';
import Binding from 'ember-exclaim/-private/binding';
import HelperSpec from 'ember-exclaim/-private/helper-spec';
import Environment from '.';
import { extractKey } from './utils';
import { wrap } from './wrapping';

// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { defineProperty, computed } from '@ember/object';

export type EnvironmentArrayInit<T> = {
  data?: Array<T> | EnvironmentArray<T>;
  env?: Environment;
  key?: string;
};

/*
 * Wraps an array, resolving any Bindings in it when requested to the corresponding
 * paths in the given environment.
 */
export default class EnvironmentArray<T> extends ArrayProxy<T> {
  private declare __wrapped__: MutableArray<T>;
  private declare __env__: Environment;
  private declare __key__: string | undefined;

  static create<T>(init: EnvironmentArrayInit<T> = {}): EnvironmentArray<T> {
    const { data, env, key } = init;
    const instance = super.create({ content: data }) as EnvironmentArray<T>;

    if (!env) {
      throw new Error('Missing environment');
    }

    instance.__wrapped__ =
      data instanceof EnvironmentArray ? data.__wrapped__ : A(data);

    instance.__env__ = env;
    instance.__key__ = key;

    return instance;
  }

  public unknownProperty(key: string): unknown {
    if (/^\d+$/.test(key)) {
      this._defineIndexProperty(key);
      return get(this, key);
    } else {
      return (this[key] = undefined);
    }
  }

  public setUnknownProperty(key: string, value: unknown): unknown {
    if (/^\d+$/.test(key)) {
      this._defineIndexProperty(key);
      set(this, key, value as never);
      return get(this, key);
    } else {
      return (this[key] = value);
    }
  }

  // Overriding objectAt (rather than objectAtContent) in order to avoid
  // the caching that ArrayProxy does in newer versions of Ember.
  public objectAt(index: number): T {
    const item = this.__wrapped__.objectAt(index);
    if (item instanceof Binding) {
      return get(this.__env__, item.path.join('.') as never);
    } else if (item instanceof HelperSpec) {
      return item.invoke(this.__env__) as T;
    } else {
      const key = extractKey(this);
      return wrap(item, this.__env__, key && `${key}.${index}`) as unknown as T;
    }
  }

  public replaceContent(index: number, amount: number, items: Array<T>): void {
    for (let i = 0; i < amount; i++) {
      const item = this.__wrapped__.objectAt(i + index);
      if (item instanceof Binding) {
        set(this.__env__, item.path.join('.') as never, items[i] as never);
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

  public toString(): string {
    return `${this.__wrapped__}`;
  }

  private _defineIndexProperty(indexString: string) {
    const index = parseInt(indexString);

    defineProperty(
      this,
      indexString,
      computed('__wrapped__.[]', {
        get: () => {
          return this.__wrapped__.objectAt(index);
        },
        set: (_key, value) => {
          if (index + 1 > this.__wrapped__.length) {
            const newWrappedArr = this.__wrapped__.slice();
            newWrappedArr[index] = value;
            // @ts-expect-error: the type for `setObjects` incorrectly expects an `EmberArray`
            this.__wrapped__.setObjects(newWrappedArr);
          } else {
            this.__wrapped__.replace(index, 1, [value]);
          }

          return value;
        },
      })
    );
  }
}
