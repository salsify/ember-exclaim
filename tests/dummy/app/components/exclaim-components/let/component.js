import { computed, get } from '@ember/object';
import Component from '@ember/component';
import { unwrap } from 'ember-exclaim';

export const NAME = 'let';
export const DESCRIPTION = 'A construct for binding values in child components';
export const SHORTHAND_PROPERTY = 'bindings';
export const PROPERTIES = [
  {
    name: 'bindings',
    description: 'A hash of values, each of which will be available to "$bind" in child components'
  },
  {
    name: 'do',
    description: 'A child component, in which all the values in "bindings" will be available'
  }
];

export default Component.extend({
  tagName: '',

  boundEnv: computed('config.bindings', 'env', function() {
    const env = get(this, 'env');
    const bindings = unwrap(get(this, 'config.bindings'));
    return bindings ? env.extend(bindings) : env;
  }),
});
