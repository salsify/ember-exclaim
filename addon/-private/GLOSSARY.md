# Glossary

This document aims to be a brief summary of the terminology used within the implementation of this addon.

## UI Config

A **`ComponentSpec`** is the information necessary to render a specific exclaim component instance: specifically, it includes the path to the Ember implementation for that component and whatever user-specified config will be supplied to that component when it's rendered.

Any hash in the UI config with a `$component` key will be transformed into a `ComponentSpec` instance, with the value for that key being used to locate the implementation of the underlying Ember component in the configured `componentMap`. All other keys in that hash will be captured as that `ComponentSpec`'s `config`, which will be passed into the Ember component on instantiation.

A **`Binding`** is a reference to some value available in the salient `Environment` (see below), much like a variable reference in a programming language. A `Binding` is meaningless on its own, and must always be evaluated in the context of some `Environment`. Note that the `config` for a `ComponentSpec` may contain `Binding`s, which won't be resolved until they're actually used. This allows components to evaluate parts of their config in varying contexts, such as an `each` component rendering the same subcomponent config with varying values for its iteration variable.

## Runtime Elements

At runtime, exclaim UIs are evaluated relative to an **`Environment`**, which is analogous to scope in a programming language. An `Environment` contains all the bound values that are available to `Binding`s, and may itself contain `Binding` instances that point at other data within itself. When the time comes to resolve the `config` for a component to actual values, `ComponentSpec` instances expose a `resolveConfig(environment)` method, which returns a `Value` instance for the configuration.

A **`Value`** is a proxy for some arbitrary hash or array that resolves any `Binding`s it contains relative to some `Environment`. You can think of `Value`s as chunks of data that remember where they came from. For instance, given a `Value` instance `val` wrapping the data `{ hi: 'hello', bye: new Binding('farewell') }`, calling `val.get('hi')` would return the string `'hello'`, and calling `val.get('bye')` would return whatever the associated `Environment` contains for the key `farewell`.

Implementation note: when an `Environment` or `Value` is asked to `get` a property, it first inspects whether the underlying value for that property is a `Binding`, and if so, resolves it. Once this resolution has occurred the first time, a computed property is generated so that subsequent lookups don't have to re-resolve, and changes to the underlying bound property will be reflected on the host `Value` or `Environment`. Any non-primitive result of a `get` on a `Value` or `Environment` will itself be a `Value`, so that `Binding`s nested arbitrarily deep will always be resolved.
