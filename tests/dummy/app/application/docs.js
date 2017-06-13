export default [
  {
    name: 'hbox',
    description: 'A container that lays out its contents horizontally',
    params: [
      {
        name: 'children',
        description: 'An array items in the container'
      }
    ]
  },
  {
    name: 'vbox',
    description: 'A container that lays out its contents vertically',
    params: [
      {
        name: 'children',
        description: 'An array items in the container'
      }
    ]
  },
  {
    name: 'text',
    description: 'Some text',
    params: [
      {
        name: 'content',
        description: 'A value or array of values that will be concatenated together and displayed'
      }
    ]
  },
  {
    name: 'header',
    description: 'A header',
    params: [
      {
        name: 'content',
        description: 'A value or array of values that will be concatenated together and displayed'
      }
    ]
  },
  {
    name: 'input',
    description: 'A basic form field',
    params: [
      {
        name: 'type',
        description: 'The type of input (e.g. text, number, etc); defaults to "text"',
      },
      {
        name: 'placeholder',
        description: 'An optional placeholder to display in the field when it has no value'
      },
      {
        name: 'value',
        description: 'The value of this input. If bound to a field in the environment, changes to the input will update that field.'
      }
    ]
  },
  {
    name: 'checkbox',
    description: 'A checkbox',
    params: [
      {
        name: 'checked',
        description: 'Whether or not this box is checked. If bound to a field in the environment, checking or unchecking the box will update that field.'
      }
    ]
  },
  {
    name: 'if',
    description: 'A construct for rendering one thing or another',
    params: [
      {
        name: 'condition',
        description: 'A value that will determine which case is rendered'
      },
      {
        name: 'then',
        description: 'An optional component spec that will be rendered if the condition is true'
      },
      {
        name: 'else',
        description: 'An optional component spec that will be rendered if the condition is false'
      }
    ]
  },
  {
    name: 'let',
    description: 'A construct for binding values in child components',
    params: [
      {
        name: 'bindings',
        description: 'A hash of values, each of which will be available to "$bind" in child components'
      },
      {
        name: 'in',
        description: 'A child component spec, in which all the values in "bindings" will be available'
      }
    ]
  },
  {
    name: 'each',
    description: 'A construct for rendering a component for each element of an array',
    params: [
      {
        name: 'items',
        description: 'The array of items to render components for'
      },
      {
        name: 'yield',
        description: 'A name to use to make the current item available to "$bind"'
      },
      {
        name: 'do',
        description: 'A component spec that will be rendered for each item in the "items" array'
      }
    ]
  },
  {
    name: 'table',
    description: 'A table rendered with one row for each element of the given array',
    params: [
      {
        name: 'items',
        description: 'An array of items representing the table rows'
      },
      {
        name: 'yield',
        description: 'A name to use to make the item for a given row available to "$bind"'
      },
      {
        name: 'header',
        description: 'An optional array of component specs defining what content should go in the header cells of the table'
      },
      {
        name: 'row',
        description: 'An array of component specs defining the content should be rendered in each cell of a row'
      }
    ]
  }
];
