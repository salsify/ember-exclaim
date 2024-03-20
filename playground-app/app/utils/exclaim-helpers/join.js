export const Join = {
  helper: (config) => config.items?.join(config.separator ?? ''),
  shorthandProperty: 'items',
  meta: {
    description: 'Joins an array of values into a single string',
    properties: [
      {
        name: 'items',
        description: 'An array of values to be joined together',
      },
      {
        name: 'separator',
        description:
          'An optional string that should be used between each joined element',
      },
    ],
  },
};
