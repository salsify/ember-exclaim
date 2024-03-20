import templateOnlyComponent from '@ember/component/template-only';

export const Hbox = {
  component: templateOnlyComponent(),
  shorthandProperty: 'children',
  meta: {
    description: 'A container that lays out its contents horizontally',
    properties: [
      {
        name: 'children',
        description: 'An array items in the container',
      },
    ],
  },
};

export default Hbox.component;
