import { computed } from '@ember/object';
import Component from '@glimmer/component';
import {
  ComponentSpec,
  Environment,
  ExclaimComponentArgs,
  read,
} from 'ember-exclaim';

export const NAME = 'table';
export const DESCRIPTION =
  'A table rendered with one row for each element of the given array';
export const SHORTHAND_PROPERTY = 'items';
export const PROPERTIES = [
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
];

export type TableArgs<T> = ExclaimComponentArgs<{
  items: Array<T>;
  yield: string;
  header?: Array<ComponentSpec>;
  row?: Array<ComponentSpec>;
}>;

export default class Table<T> extends Component<TableArgs<T>> {
  @computed('args.config.{yield,items.[]}', 'args.env')
  get items(): Array<Environment> | undefined {
    const { env, config } = this.args;
    const items = read(config, 'items');
    const key = read(config, 'yield');

    return items?.map((item) => env.extend({ [key]: item }));
  }
}
