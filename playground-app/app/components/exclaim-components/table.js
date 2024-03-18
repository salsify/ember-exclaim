import templateOnlyComponent from '@ember/component/template-only';

export const Table = {
  component: templateOnlyComponent(),
  shorthandProperty: 'items',
  meta: {
    description:
      'A table rendered with one row for each element of the given array',
    properties: [
      {
        name: 'items',
        description: 'An array of items representing the table rows',
      },
      {
        name: 'yield',
        description:
          'A name to use to make the item for a given row available to "$bind"',
      },
      {
        name: 'header',
        description:
          'An optional array of component specs defining what content should go in the header cells of the table',
      },
      {
        name: 'row',
        description:
          'An array of component specs defining the content should be rendered in each cell of a row',
      },
    ],
  },
};

export default Table.component;
