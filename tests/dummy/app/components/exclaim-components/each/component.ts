import { computed } from '@ember/object';
import Component from '@glimmer/component';
import {
  ExclaimComponentArgs,
  ComponentSpec,
  Environment,
  read,
} from 'ember-exclaim';

export const NAME = 'each';
export const DESCRIPTION =
  'A construct for rendering a component for each element of an array';
export const SHORTHAND_PROPERTY = 'items';
export const PROPERTIES = [
  {
    name: 'items',
    description: 'The array of items to render components for',
  },
  {
    name: 'yield',
    description: 'A name to use to make the current item available to "$bind"',
  },
  {
    name: 'do',
    description:
      'A component spec that will be rendered for each item in the "items" array',
  },
];

export type EachArgs<T> = ExclaimComponentArgs<{
  items: Array<T>;
  yield: string;
  do: ComponentSpec;
}>;

export default class Each<T> extends Component<EachArgs<T>> {
  @computed('args.config.{items.[],yield}', 'args.env')
  get items(): Array<Environment> | undefined {
    const { env, config } = this.args;
    const key = read(config, 'yield');
    const items = read(config, 'items');

    return items?.map((item) => env.extend({ [key]: item }));
  }
}
