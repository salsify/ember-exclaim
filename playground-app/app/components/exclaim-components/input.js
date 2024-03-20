import Component from '@glimmer/component';

class ExclaimInput extends Component {
  get type() {
    return this.args.config.type ?? 'text';
  }

  onInput = (event) => {
    this.args.config.value = event.target.value;
  };
}

export const Input = {
  component: ExclaimInput,
  shorthandProperty: 'value',
  meta: {
    description: 'A basic form field',
    isUserInput: true,
    properties: [
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
    ],
  },
};

export default Input.component;
