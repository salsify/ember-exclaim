import { stripIndent } from 'common-tags';

export default [
  {
    name: 'Hello World',
    interface: stripIndent`
      {
        "$text": "Hello World!"
      }
    `,
  },
  {
    name: 'Hello World (Dynamic)',
    interface: stripIndent`
      {
        "$text": { "$join": ["Hello ", {"$bind":"hello_target"}, "!"] }
      }
    `,
    environment: stripIndent`
      {
        "hello_target": "World"
      }
    `,
  },
  {
    name: 'Iteration',
    interface: stripIndent`
      {
        "$vbox": [
          {
            "$each": [1, 2, 3],
            "yield": "number",
            "do": {
              "$text": { "$join": ["Item #", {"$bind":"number"}] }
            }
          }
        ]
      }
    `,
  },
  {
    name: 'Input',
    interface: stripIndent`
      {
        "$vbox": [
          {
            "$header": "Input"
          },
          {
            "$box": [
              { "$text": "text_value:" },
              { "$input": {"$bind":"text_value"} }
            ]
          },
          {
            "$box": [
              { "$text": "boolean_value:" },
              { "$checkbox": {"$bind":"boolean_value"} }
            ]
          },
          {
            "$header": "Output"
          },
          {
            "$text": { "$join": ["text_value: ", {"$bind":"text_value"}] }
          },
          {
            "$text": { "$join": ["boolean_value: ", {"$bind":"boolean_value"}] }
          }
        ]
      }
    `,
    environment: stripIndent`
      {
        "text_value": "hello",
        "boolean_value": true
      }
    `,
  },
  {
    name: 'Table',
    interface: stripIndent`
      {
        "$table": ["one", "two", "three"],

        "header": [
          { "$text": "Name" },
          { "$text": "Length" }
        ],

        "yield": "item",
        "row": [
          { "$text": {"$bind":"item"} },
          { "$text": {"$bind":"item.length"} }
        ]
      }
    `,
  },
  {
    name: 'Complex Binding',
    interface: stripIndent`
      {
        "$vbox": [
          {
            "$header": { "$join": ["Displaying ", {"$bind":"items.length"}, " Items"] }
          },
          {
            "$each": {"$bind":"items"},
            "yield": "item",
            "do": {
              "$text": { "$join": ["Value: ", {"$bind":"item.name"}] }
            }
          },
          {
            "$header": { "$join": ["Editing ", {"$bind":"items.length"}, " Items"] }
          },
          {
            "$each": {"$bind":"items"},
            "yield": "item",
            "do": {
              "$input": {"$bind":"item.name"}
            }
          }
        ]
      }
    `,
    environment: stripIndent`
      {
        "items": [
          { "name": "Item 1" },
          { "name": "Item 2" },
          { "name": "Item 3" },
          { "name": "Item 4" }
        ]
      }
    `,
  },
];
