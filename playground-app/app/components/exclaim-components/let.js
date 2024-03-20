import templateOnlyComponent from '@ember/component/template-only';

export const Let = {
  component: templateOnlyComponent(),
  shorthandProperty: 'bindings',
  meta: {
    description: 'A construct for binding values in child components',
    properties: [
      {
        name: 'bindings',
        description:
          'A hash of values, each of which will be available to "$bind" in child components',
      },
      {
        name: 'do',
        description:
          'A child component, in which all the values in "bindings" will be available',
      },
    ],
  },
};

export default Let.component;
