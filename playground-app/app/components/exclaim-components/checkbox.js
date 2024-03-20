import Component from '@glimmer/component';

class ExclaimCheckbox extends Component {
  onChange = (event) => {
    this.args.config.checked = event.target.checked;
  };
}

export const Checkbox = {
  component: ExclaimCheckbox,
  shorthandProperty: 'checked',
  meta: {
    isUserInput: true,
    description: 'A checkbox',
    properties: [
      {
        name: 'checked',
        description:
          'Whether or not this box is checked. If bound to a field in the environment, checking or unchecking the box will update that field.',
      },
    ],
  },
};

export default Checkbox.component;
