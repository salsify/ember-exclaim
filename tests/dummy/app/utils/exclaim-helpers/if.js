import { get } from '@ember/object';

export const NAME = 'if';
export const DESCRIPTION = 'A construct for rendering one thing or another';
export const SHORTHAND_PROPERTY = 'condition';
export const PROPERTIES = [
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
];

export default (config) => {
  if (get(config, 'condition')) {
    return get(config, 'then');
  } else {
    return get(config, 'else');
  }
};
