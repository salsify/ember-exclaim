# ember-exclaim [![CI](https://github.com/salsify/ember-exclaim/actions/workflows/ci.yml/badge.svg)](https://github.com/salsify/ember-exclaim/actions/workflows/ci.yml)

This addon allows apps to expose declarative, JSON-configurable custom UIs that are backed by Ember components.

## Simple Examples

The building blocks available to an ember-exclaim UI are defined by the app it's used in, but the dummy application in this project contains implementations of several basic components that might be useful. For example, in the [demo application](https://salsify.github.io/ember-exclaim), the following would render a header with some filler content below it:

```js
{
  "$vbox": [
    { "$header": "Very Important Content" },
    { "$text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ]
}
```

<img src="https://user-images.githubusercontent.com/108688/27345599-4e40b902-55b8-11e7-8e65-195117aeded4.png" width="369">

Components can also read from and write back to an underlying data structure. For example, given this environment:

```js
{
  "target": "world"
}
```

The following UI would render "Hello, world!":

```js
{
  "$text": {
    "$join": ["Hello, ", { "$bind": "target" }, "!"]
  }
}
```

And something like this would render an input that would update the underlying value of `target` as the user made changes:

```js
{
  "$input": { "$bind": "target" }
}
```

![hello](https://user-images.githubusercontent.com/108688/27351743-593ffcb4-55cc-11e7-9fdb-cb8eb33daa42.gif)

## Usage

The entry point to a UI powered by ember-exclaim is the `<ExclaimUi>` component. It accepts the following arguments:
 - `@ui`: an object containing configuration for the UI that should be rendered
 - `@env`: a hash whose keys will be bindable from the `ui` config, to be read from and written to
 - `@implementationMap`: a mapping of names in the `ui` config to information about their backing implementations
 - `@onChange(envPathOfChangedValue)`: an optional function that will be invoked when a value in the `env` changes
 - `@wrapper`: an optional component that will wrap every rendered component in your UI configuration. The `wrapper` component will receive the `ComponentSpec` as `@spec` ([more on `ComponentSpec` here](ember-exclaim/src/-private/GLOSSARY.md)), the `Environment` as `@env` and the component's resolved `@config`.

Each of these things is described in further detail below.

### UI Configuration

The configuration for an ember-exclaim UI boils down to three special keys: `$component`, `$helper` and `$bind`.

#### `$component`

Components are used to render content to the screen in an ember-exclaim UI. The basic way to invoke a component is with a hash containing a `$component` key. The value of this key will be used to look up the underlying Ember component implementation according to the configured `implementationMap`, and all other keys in the hash will become that component's `config`. As a concrete example, consider the following usage of a hypothetical `text` component:

```js
{
  "$component": "text",
  "content": "Hello"
}
```

This would invoke whatever Ember component is configured under the `text` key of the given `implementationMap`, passing it a hash of configuration that looks like `{ content: 'Hello' }`.

#### `$helper`

Helpers are used to transform data for an ember-exclaim UI. Unlike components, they don't directly render anything. Helpers are invoked by inserting a hash containing a `$helper` key. The value of this key will be used to look up the underlying implementation for the helper.

As a concrete example, if you wanted to render an array of items as a comma separated list using the `text` component above, you might use a `join` helper:

```js
{
  "$component": "text",
  "content": {
    "$helper": "join",
    "items": ["one", "two", "three"],
    "separator": ", "
  }
}
```

This would invoke whatever helper function is configured under the `join` key of the given `implementationMap`, passing it a hash of configuration that looks like `{ items: ['one', 'two', 'three'], separator: ', ' }`.

#### `$bind`

To read and write values in the environment, the UI author can use `$bind`. For example, dynamically rendering whatever the value the configured environment has for `greeting` using the same text component described above might look like:

```js
{
  "$component": "text",
  "content": { "$bind": "greeting" }
}
```

Similarly, an `input` component could write to the environment's `greeting` value as the user makes changes:

```js
{
  "$component": "input",
  "value": { "$bind": "greeting" }
}
```

Note that component implementations might also expose `$bind`able values to their children, such as an `each` component that iterates an array and exposes each item in that array under a given name.

#### Shorthand Syntax

You may have noted that the examples in this section appear more verbose than those at the top of the document. By supplying the name of a _shorthand property_, components and helpers can be invoked using their name prefixed with a `$` as a key for that property, skipping the `$component` or `$helper` key completely.

For example, the `text` component in [the demo application](https://salsify.github.io/ember-exclaim) declares its shorthand property to be `content`, making this:

```js
{
  "$component": "text",
  "content": "Hello, world!"
}
```

Equivalent to this:

```js
{ "$text": "Hello, world!" }
```

Similarly, if the `join` helper mentioned above declared `items` to be its shorthand property, then this:

```js
{
  "$helper": "join",
  "items": [1, 2, 3],
  "separator": " + "
}
```

Would be equivalent to this:

```js
{
  "$join": [1, 2, 3],
  "separator": " + "
}
```

### The Environment

Keys on the given `env` object are what powers `$bind` directives in the configured UI. The object in question may be a simple POJO or something richer, like an Ember Data model. Avoid swapping the `env` object out wholesale, as this will cause unnecessary rerenders.

Note that `$bind` works with paths, too, so `{ $bind: 'foo.bar' }` would access the `bar` key of the `foo` object in the environment.

### The Implementation Map

The `@implementationMap` given to `<ExclaimUi>` dictates what components it can render. It should be a hash whose keys are the component and helper names available for use in the UI config. The value for each key should itself be a hash describing the component or helper with that name.
 - `component` (for components): the name to the Ember component to be invoked when this exclaim-ui component is used in the config, as you'd give it to the `{{component}}` helper
 - `helper` (for helper functions): a function that receives a `config` hash and `env` information and should return the output value for the helper
 - `shorthandProperty` (optional for both helpers and components): the name of a property that should be populated when shorthand notation is used for this component or helper (see above)

## Implementing Components

The [demo app](https://salsify.github.io/ember-exclaim) for this repo contains [a variety of simple component implementations](tests/dummy/app/components/exclaim-components) that you can use as a starting point for building your own.

An ember-exclaim component implementation will receive two properties when rendered: `config` and `env`.

### `@config`

The `@config` argument of the implementing component will contain all other information supplied in the `$component` hash representing it in the UI config. Any `$bind` directives in that config will be automatically be resolved when they are `get` or `set`. As an example, consider a lightweight implementation of the `input` component mentioned above.

```hbs
<input type="text" value={{@config.value}} oninput={{action (mut @config.value) value='target.value'}}>
```

When invoked as `{ "$component": "input", "value": {"$bind":"x"} }` with `x` in the environment having the value `'hello'`, this component will receive the equivalent of `{ value: 'hello' }` as its `config`, except that reading and writing `config.value` will redirect back to `x` on the environment.

### `@env`

The `@env` arg to components in the UI will contain the same `@env` value passed to `<ExclaimUi>` (or an extension of that value). Components should rarely need to access it directly, but it's available as a grab bag of shared state that all components in an instance of a UI have access to.

### Rendering Children

In many cases, components may want to accept configuration for subcomponents that they can render under different circumstances, such as an `if` component that conditionally renders some content, or an `each` component that renders the same child multiple times against different values. Implementations can accomplish this by `{{yield}}`ing the configuration for the child component.

For example, the [`vbox`](tests/dummy/app/components/exclaim-components/vbox) component in the demo application applies a class with `flex-flow: column` to its root element and then simply renders all its children directly beneath:

```hbs
{{#each @config.children as |child|}}
  {{yield child}}
{{/each}}
```

By default, children will inherit the environment of their parent. This environment can be extended by passing a POJO with additional key/value pairs as a second parameter to `{{yield}}`. Check the implementation of [`each`](playground-app/app/components/exclaim-components/each) and [`let`](playground-app/app/components/exclaim-components/let) in the demo app for examples of how this can be used.

## Implementing Helpers

The [demo app](https://salsify.github.io/ember-exclaim) for this repo contains [a handful of helper implementations](tests/dummy/app/utils/exclaim-helpers) that you can use as a starting point for building your own.

An ember-exclaim helper implementation is simply a function that takes two arguments, `config` and `env`, which are the same two values described for components above. The value returned when this function is called will be the ultimate value of the `{ $helper: ... }` hash in the UI configuration.
