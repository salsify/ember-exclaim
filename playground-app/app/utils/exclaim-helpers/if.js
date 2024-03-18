export const If = {
  helper: (config) => (config.condition ? config.then : config.else),
  shorthandProperty: 'condition',
  meta: {
    description: 'A construct for rendering one thing or another',
    properties: [
      {
        name: 'condition',
        description: 'A value that will determine which case is rendered',
      },
      {
        name: 'then',
        description:
          'An optional component that will be rendered if the condition is true',
      },
      {
        name: 'else',
        description:
          'An optional component that will be rendered if the condition is false',
      },
    ],
  },
};
