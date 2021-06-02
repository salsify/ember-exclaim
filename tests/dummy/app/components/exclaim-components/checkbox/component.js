import Component from '@ember/component';

export const NAME = 'checkbox';
export const DESCRIPTION = 'A checkbox';
export const SHORTHAND_PROPERTY = 'checked';
export const PROPERTIES = [
  {
    name: 'checked',
    description:
      'Whether or not this box is checked. If bound to a field in the environment, checking or unchecking the box will update that field.',
  },
];

export const COMPONENT_META = {
  isUserInput: true,
  writesKeys: [SHORTHAND_PROPERTY],
};

export default Component.extend({
  tagName: '',
});
