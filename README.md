# ember-exclaim [![Build Status](https://travis-ci.org/salsify/ember-exclaim.svg?branch=master)](https://travis-ci.org/salsify/ember-exclaim)

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
  "$text": ["Hello, ", { "$bind": "target" }, "!"]
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

The entry point to a UI powered by ember-exclaim is the `{{exclaim-ui}}` component. It expects up to six arguments:
 - `ui`: an object containing configuration for the UI that should be rendered
 - `env`: a hash whose keys will be bindable from the `ui` config, to be read from and written to
 - `componentMap`: a mapping of component names in the `ui` config to information about their backing Ember components
 - `resolveFieldMeta(path)`: an optional action that will be invoked if a component calls `env.metaFor(...)`
 - `onChange(envKeyOfChangedValue)`: an optional action that will be invoked when a value in the `env` changes
 - `wrapper`: an optional component or component name string that will wrap every rendered component in your UI configuration. The `wrapper` component will receive the unwrapped `spec`, the `env` and the component's resolved `config`.

Each of these things is described in further detail below.

### UI Configuration

The configuration for an ember-exclaim UI boils down to two special keys: `$component` and `$bind`.

#### `$component`

The basic way to invoke a component in an ember-exclaim UI is with a hash containing a `$component` key. The value of this key will be used to look up the underlying Ember component implementation according to the configured `componentMap`, and all other keys in the hash will become that component's `config`. As a concrete example, consider the following usage of a hypothetical `text` component:

```js
{
  "$component": "text",
  "content": "Hello"
}
```

This would invoke whatever Ember component is configured under the `text` key of the given `componentMap`, passing it a hash of configuration that looks like `{ content: 'Hello' }`.

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

#### Component Shorthand

You may have noted that the examples in this section appear more verbose than those at the top of the document. By supplying the name of a _shorthand property_, components can be invoked using their name prefixed with a `$` as a key for that property, skipping the `$component` key completely.

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

Any other configuration keys the component expects can be specified the same way in either format.

### The Environment

Keys on the given `env` object are what powers `$bind` directives in the configured UI. The object in question may be a simple POJO or something richer, like an Ember Data model.

Note that `$bind` works with paths, too, so `{ $bind: 'foo.bar' }` would access the `bar` key of the `foo` object in the environment.

### The Component Map

The `componentMap` given to `{{exclaim-ui}}` dictates what components it can render. It should be a hash whose keys are the component names available for use in the UI config. The value for each key should itself be a hash containing the following:
 - `componentPath`: the name to the Ember component to be invoked when this exclaim-ui component is used in the config, as you'd give it to the `{{component}}` helper
 - `shorthandProperty` (optional): the name of a property that should be populated when shorthand notation is used for this component (see above)

### Metadata Resolution

The `env` property exposed to ember-exclaim components (see below for details) includes a `metaFor(object, key)` method that component implementations can use to discover more information about their bound values. For instance, an `$input` component might call `metaFor(this, 'config.value')` to discover validation rules for its bound value in order to display an error message to the user.

The `resolveFieldMeta` action on `{{exclaim-ui}}` designates how this metadata is discovered. It receives the full path in the environment of the value in question.

This action should return any relevant information available about the field at `valuePath`. Note that, if a component calls `metaFor` on a path that doesn't resolve to a field on the environment, the `resolveFieldMeta` action will not be invoked.

## Implementing Components

The [demo app](https://salsify.github.io/ember-exclaim) for this repo contains [a variety of simple component implementations](tests/dummy/app/components/exclaim-components) that you can use as a starting point for building your own.

An ember-exclaim component implementation will receive two properties when rendered: `env` and `config`.

### `config`

The `config` property of the implementing component will contain all other information supplied in the `$component` hash representing it in the UI config. Any `$bind` directives in that config will be automatically be resolved when they are `get` or `set`. As an example, consider a lightweight implementation of the `input` component mentioned above.

```hbs
<input type="text" value={{config.value}} oninput={{action (mut config.value) value='target.value'}}>
```

When invoked as `{ "$component": "input", "value": {"$bind":"x"} }` with `x` in the environment having the value `'hello'`, this component will receive the equivalent of `{ value: 'hello' }` as its `config`, except that reading and writing `config.value` will redirect back to `x` on the environment.

### `env`

The `env` property will contain an object representing the environment that the component is being rendered in. This object has two methods:
 - `extend(hash)`: can be used to produce a new environment based on the original that additionally contains the values from the given hash
 - `metaFor(object, key)`: takes an object and key, resolves the canonical path for that key in the environment, and then retrieves metadata for that path according to any configured `resolveFieldMeta` action on the owning `{{exclaim-ui}}` component

### Rendering Children

In many cases, components may want to accept configuration for subcomponents that they can render under different circumstances, such as an `if` component that conditionally renders some content, or an `each` component that renders the same child multiple times against different values. Implementations can accomplish this by `{{yield}}`ing the configuration for the child component.

For example, the [`vbox`](tests/dummy/app/components/exclaim-components/vbox) component in the demo application applies a class with `flex-flow: column` to its root element and then simply renders all its children directly beneath:

```hbs
{{#each config.children as |child|}}
  {{yield child}}
{{/each}}
```

By default, children will inherit the environment of their parent. This environment can be overridden by passing a new `env` value as a second parameter to `{{yield}}`, typically obtained by calling `extend` on the base environment (see above). Check the implementation of [`each`](tests/dummy/app/components/exclaim-components/each) and [`let`](tests/dummy/app/components/exclaim-components/let) in the demo app for examples of how this can be used.
