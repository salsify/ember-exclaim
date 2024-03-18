import { ComponentLike } from '@glint/template';

/**
 * Returns the environment and source path within it where the field at
 * the path on the given object originates, if known.
 */
export function resolveEnvPath(
  object: unknown,
  path: string,
): string | undefined;

/** The data defining a helper in an {@link ImplementationMap} */
export type HelperImplementation = {
  helper: (...args: Array<never>) => unknown;
  helperMeta?: unknown;
  shorthandProperty?: string;
};

/** The data defining a component in an {@link ImplementationMap} */
export type ComponentImplementation = {
  componentPath: ComponentLike<unknown> | string;
  componentMeta?: unknown;
  shorthandProperty?: string;
};

/**
 * A mapping of names that can be used in a UI spec with `$helper`
 * or `$component` to the runtime implementation that should be invoked
 * when that name is encountered.
 */
export type ImplementationMap<Names extends string = string> = Record<
  Names,
  HelperImplementation | ComponentImplementation
>;

/** Represents a `$component` object in a UI spec. */
export class ComponentSpec {
  readonly component: ComponentLike<unknown>;
  readonly config: unknown;
  readonly meta: unknown;

  resolveConfig(env: Environment<unknown>): unknown;
}

/** Represents a `$helper` object in a UI spec. */
export class HelperSpec {
  readonly helper: (...args: Array<never>) => unknown;
  readonly config: unknown;
  readonly meta: unknown;
  readonly bindings: Array<unknown>;

  invoke(env: Environment<unknown>): unknown;
}

/**
 * @deprecated This function is now a no-op and should no longer be used.
 */
export function unwrap<T>(value: T): T;
