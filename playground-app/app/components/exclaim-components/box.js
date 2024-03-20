import templateOnlyComponent from '@ember/component/template-only';

export const Box = {
  component: templateOnlyComponent(),
  shorthandProperty: 'children',
  meta: {
    description:
      'A container whose children flow naturally, whatever that means',
    properties: [
      {
        name: 'children',
        description: 'An array items in the container',
      },
    ],
  },
};

export default Box.component;
