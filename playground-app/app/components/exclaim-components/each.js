import templateOnlyComponent from '@ember/component/template-only';

export const Each = {
  component: templateOnlyComponent(),
  shorthandProperty: 'items',
  meta: {
    description:
      'A construct for rendering a component for each element of an array',
    properties: [
      {
        name: 'items',
        description: 'The array of items to render components for',
      },
      {
        name: 'yield',
        description:
          'A name to use to make the current item available to "$bind"',
      },
      {
        name: 'do',
        description:
          'A component spec that will be rendered for each item in the "items" array',
      },
    ],
  },
};

export default Each.component;
