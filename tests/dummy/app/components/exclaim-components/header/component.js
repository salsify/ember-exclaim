import Ember from 'ember';
import joinStringContent from 'dummy/utils/join-string-content';

const {
  get,
  computed,
  Component,
} = Ember;

export const NAME = 'header';
export const DESCRIPTION = 'A header';
export const SHORTHAND_PROPERTY = 'content';
export const PROPERTIES = [
  {
    name: 'content',
    description: 'A value or array of values that will be concatenated together and displayed'
  }
];

export const COMPONENT_META = {
  boundKey: SHORTHAND_PROPERTY,
};

export default Component.extend({
  tagName: 'h3',

  content: computed('config.content', function() {
    return joinStringContent(get(this, 'config.content'));
  }),
});
