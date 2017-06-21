import Ember from 'ember';

const {
  get,
  Component,
} = Ember;

export default Component.extend({
  tagName: '',

  string: null,

  valueChanged(newString) {
    try {
      JSON.parse(newString);
      get(this, 'onChange')(newString);
    } catch (error) {
      // Ignore, just don't update
    }
  }
});
