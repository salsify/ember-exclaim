import templateOnlyComponent from '@ember/component/template-only';

export const VBox = {
  component: templateOnlyComponent(),
  shorthandProperty: 'children',
  meta: {
    descriptioN: 'A container that lays out its contents vertically',
    properties: [
      {
        name: 'children',
        description: 'An array items in the container',
      },
    ],
  },
};

export default VBox.component;
