import { computed, get } from '@ember/object';
import Component from '@ember/component';

export const NAME = 'each';
export const DESCRIPTION = 'A construct for rendering a component for each element of an array';
export const SHORTHAND_PROPERTY = 'items';
export const PROPERTIES = [
  {
    name: 'items',
    description: 'The array of items to render components for'
  },
  {
    name: 'yield',
    description: 'A name to use to make the current item available to "$bind"'
  },
  {
    name: 'do',
    description: 'A component spec that will be rendered for each item in the "items" array'
  }
];

export default Component.extend({
  tagName: '',

  items: computed('config.{items.[],yield}', 'env', function() {
    const items = get(this, 'config.items');

    if (items) {
      const env = get(this, 'env');
      const key = get(this, 'config.yield');
      return items.map(item => env.extend({ [key]: item }));
    }
  })
});
