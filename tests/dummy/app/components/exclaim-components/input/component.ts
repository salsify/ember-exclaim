import { computed } from '@ember/object';
import Component from '@glimmer/component';
import { ExclaimComponentArgs, read } from 'ember-exclaim';

export const NAME = 'input';
export const DESCRIPTION = 'A basic form field';
export const SHORTHAND_PROPERTY = 'value';
export const PROPERTIES = [
  {
    name: 'type',
    description:
      'The type of input (e.g. text, number, etc); defaults to "text"',
  },
  {
    name: 'placeholder',
    description:
      'An optional placeholder to display in the field when it has no value',
  },
  {
    name: 'value',
    description:
      'The value of this input. If bound to a field in the environment, changes to the input will update that field.',
  },
];

export const COMPONENT_META = {
  isUserInput: true,
  writesKeys: [SHORTHAND_PROPERTY],
};

export type InputArgs = ExclaimComponentArgs<{
  type?: string;
  placeholder?: string;
  value: string;
}>;

export default class InputComponent extends Component<InputArgs> {
  @computed('args.config.type')
  get type(): string {
    return read(this, 'args.config.type') ?? 'text';
  }
}
