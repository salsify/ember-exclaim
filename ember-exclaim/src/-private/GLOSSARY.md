# Glossary

This document aims to be a brief summary of the terminology used within the implementation of this addon.

## UI Config

A **`ComponentSpec`** is the information necessary to render a specific exclaim component instance: specifically, it includes the path to the Ember implementation for that component and whatever user-specified config will be supplied to that component when it's rendered.

Any hash in the UI config with a `$component` key will be transformed into a `ComponentSpec` instance, with the value for that key being used to locate the implementation of the underlying Ember component in the configured `implementationMap`. All other keys in that hash will be captured as that `ComponentSpec`'s `config`, which will be passed into the Ember component on instantiation.

A **`HelperSpec`** is the information necessary to compute the value of a helper when it's invoked in a particular environment. It includes a function implementing the helper, and a hash of user-supplied configuration that will be resolved according to the active environment at runtime.

Any hash in the UI config with a `$helper` key will be transformed into a `HelperSpec` instance, following the same resolution rules as `ComponentSpec`s do, but looking for a `helper` function in the `implementationMap` rather than a `componentPath`.

A **`Binding`** is a reference to some value available in the salient _environment_ (see below), much like a variable reference in a programming language. A `Binding` is meaningless on its own, and must always be evaluated in the context of some `Environment`. Note that the `config` for a `ComponentSpec` may contain `Binding`s, which won't be resolved until they're actually used. This allows components to evaluate parts of their config in varying contexts, such as an `each` component rendering the same subcomponent config with varying values for its iteration variable.

## Runtime Elements

At runtime, exclaim UIs are evaluated relative to an _environment_, which is analogous to scope in a programming language. An environment contains all the bound values that are available to `Binding`s. When the time comes to resolve the `config` for a component to actual values, `ComponentSpec` instances expose a `resolveConfig(environment)` method, which creates a copy of its configuration with any `Binding` or `HelperSpec` instances replaced with appropriate getters and setters that will read data from the given environment.
