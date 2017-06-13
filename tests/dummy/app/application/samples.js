import { stripIndent } from 'common-tags';

export default [
  {
    name: 'Hello World',
    interface: stripIndent`
      {
        "$component": "text",
        "content": "Hello World!"
      }
    `,
  },
  {
    name: 'Hello World (Dynamic)',
    interface: stripIndent`
      {
        "$component": "text",
        "content": ["Hello ", {"$bind":"hello_target"}, "!"]
      }
    `,
    environment: stripIndent`
      {
        "hello_target": "World"
      }
    `
  },
  {
    name: 'Iteration',
    interface: stripIndent`
      {
        "$component": "vbox",
        "children": [
          {
            "$component": "each",
            "items": [1, 2, 3],
            "yield": "number",
            "do": {
              "$component": "text",
              "content": ["Item #", {"$bind":"number"}]
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
        "$component": "vbox",
        "children": [
          {
            "$component": "header",
            "content": "Input"
          },
          {
            "$component": "box",
            "children": [
              { "$component": "text", "content": "text_value:" },
              { "$component": "input", "value": {"$bind":"text_value"} }
            ]
          },
          {
            "$component": "box",
            "children": [
              { "$component": "text", "content": "boolean_value:" },
              { "$component": "checkbox", "checked": {"$bind":"boolean_value"} }
            ]
          },
          {
            "$component": "header",
            "content": "Output"
          },
          {
            "$component": "text",
            "content": ["text_value: ", {"$bind":"text_value"}]
          },
          {
            "$component": "text",
            "content": ["boolean_value: ", {"$bind":"boolean_value"}]
          }
        ]
      }
    `,
    environment: stripIndent`
      {
        "text_value": "hello",
        "boolean_value": true
      }
    `
  },
  {
    name: 'Table',
    interface: stripIndent`
      {
        "$component": "table",
        "items": ["one", "two", "three"],

        "header": [
          { "$component": "text", "content": "Name" },
          { "$component": "text", "content": "Length" }
        ],

        "yield": "item",
        "row": [
          { "$component": "text", "content": {"$bind":"item"} },
          { "$component": "text", "content": {"$bind":"item.length"} }
        ]
      }
    `
  },
  {
    name: 'Complex Binding',
    interface: stripIndent`
      {
        "$component": "vbox",
        "children": [
          {
            "$component": "header",
            "content": ["Displaying ", {"$bind":"items.length"}, " Items"]
          },
          {
            "$component": "each",
            "items": {"$bind":"items"},
            "yield": "item",
            "do": {
              "$component": "text",
              "content": ["Value: ", {"$bind":"item.name"}]
            }
          },
          {
            "$component": "header",
            "content": ["Editing ", {"$bind":"items.length"}, " Items"]
          },
          {
            "$component": "each",
            "items": {"$bind":"items"},
            "yield": "item",
            "do": {
              "$component": "input",
              "value": {"$bind":"item.name"}
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
    `
  }
];
