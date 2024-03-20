import templateOnlyComponent from '@ember/component/template-only';

export const Text = {
  component: templateOnlyComponent(),
  shorthandProperty: 'content',
  meta: {
    description: 'Some text',
    properties: [
      {
        name: 'content',
        description:
          'A value or array of values that will be concatenated together and displayed',
      },
    ],
  },
};

export default Text.component;
