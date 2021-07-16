import { computed } from '@ember/object';
import Component from '@glimmer/component';
import {
  ComponentSpec,
  Environment,
  ExclaimComponentArgs,
  read,
  unwrap,
} from 'ember-exclaim';

export const NAME = 'let';
export const DESCRIPTION = 'A construct for binding values in child components';
export const SHORTHAND_PROPERTY = 'bindings';
export const PROPERTIES = [
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
];

export type LetArgs<T extends Record<string, unknown>> = ExclaimComponentArgs<{
  bindings?: T;
  do: ComponentSpec;
}>;

export default class LetComponent<
  T extends Record<string, unknown>
> extends Component<LetArgs<T>> {
  @computed('args.{env,config.bindings}')
  get boundEnv(): Environment {
    const { env, config } = this.args;
    const bindings = unwrap(read(config, 'bindings'));
    return bindings ? env.extend(bindings) : env;
  }
}
