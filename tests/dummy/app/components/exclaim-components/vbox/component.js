import Component from '@ember/component';

export const NAME = 'vbox';
export const DESCRIPTION = 'A container that lays out its contents vertically';
export const SHORTHAND_PROPERTY = 'children';
export const PROPERTIES = [
  {
    name: 'children',
    description: 'An array items in the container',
  },
];

export default Component.extend({
  localClassNames: 'vbox',
});
