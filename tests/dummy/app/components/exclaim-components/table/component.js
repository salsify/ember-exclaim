import Ember from 'ember';

const {
  get,
  computed,
  Component,
} = Ember;

export const NAME = 'table';
export const DESCRIPTION = 'A table rendered with one row for each element of the given array';
export const SHORTHAND_PROPERTY = 'items';
export const PROPERTIES = [
  {
    name: 'items',
    description: 'An array of items representing the table rows'
  },
  {
    name: 'yield',
    description: 'A name to use to make the item for a given row available to "$bind"'
  },
  {
    name: 'header',
    description: 'An optional array of component specs defining what content should go in the header cells of the table'
  },
  {
    name: 'row',
    description: 'An array of component specs defining the content should be rendered in each cell of a row'
  }
];

export default Component.extend({
  tagName: '',

  items: computed('config.items.[]', 'config.yield', 'env', function() {
    const items = get(this, 'config.items');

    if (items) {
      const env = get(this, 'env');
      const key = get(this, 'config.yield');
      return items.map(item => env.extend({ [key]: item }));
    }
  })
});
