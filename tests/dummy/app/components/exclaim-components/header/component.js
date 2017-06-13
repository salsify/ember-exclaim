import Ember from 'ember';
import joinStringContent from 'dummy/utils/join-string-content';

const {
  get,
  computed,
  Component,
} = Ember;

export default Component.extend({
  tagName: 'h3',

  content: computed('config.content', function() {
    return joinStringContent(get(this, 'config.content'));
  }),
});
