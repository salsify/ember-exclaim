import { get } from '@ember/object';

export const NAME = 'join';
export const DESCRIPTION = 'Joins an array of values into a single string';
export const SHORTHAND_PROPERTY = 'items';
export const PROPERTIES = [
  {
    name: 'items',
    description: 'An array of values to be joined together'
  },
  {
    name: 'separator',
    description: 'An optional string that should be used between each joined element'
  },
];

export default (config) => {
  let items = get(config, 'items');
  let separator = get(config, 'separator') || '';
  return items ? items.toArray().join(separator) : '';
};
