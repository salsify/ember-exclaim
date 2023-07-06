import Component from '@ember/component';

export const NAME = 'box';
export const DESCRIPTION =
  'A container whose children flow naturally, whatever that means';
export const SHORTHAND_PROPERTY = 'children';
export const PROPERTIES = [
  {
    name: 'children',
    description: 'An array items in the container',
  },
];

export default Component.extend({});
