import templateComponent from '@ember/component/template-only';

export const NAME = 'hbox';
export const DESCRIPTION =
  'A container that lays out its contents horizontally';
export const SHORTHAND_PROPERTY = 'children';
export const PROPERTIES = [
  {
    name: 'children',
    description: 'An array items in the container',
  },
];

export default templateComponent();
