import Component from '@ember/component';

export const NAME = 'text';
export const DESCRIPTION = 'Some text';
export const SHORTHAND_PROPERTY = 'content';
export const PROPERTIES = [
  {
    name: 'content',
    description: 'A value or array of values that will be concatenated together and displayed'
  }
];

export default Component.extend({
  tagName: 'span',
});
