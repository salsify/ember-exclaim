import Ember from 'ember';

const {
  get,
  computed,
  Component,
} = Ember;

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
