import Ember from 'ember';

const {
  get,
  computed,
  Component,
} = Ember;

export default Component.extend({
  tagName: '',

  type: computed('config.type', function() {
    return get(this, 'config.type') || 'text';
  }),
});
