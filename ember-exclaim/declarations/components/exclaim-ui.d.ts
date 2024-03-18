import { ComponentLike } from '@glint/template';
import { ComponentSpec, ImplementationMap } from '../index';

declare const ExclaimUi: ComponentLike<{
  Args: {
    /**
     * A spec for an Exclaim UI.
     */
    ui: unknown;

    /**
     * A mapping of names to implementations for use by `$component`
     * and `$helper` in the given UI spec.
     */
    implementationMap: ImplementationMap;

    /**
     * The backing data that any `$bind` in the UI spec will be bound
     * to. This value will also be directly available as `@env` to all
     * components rendered in this UI.
     */
    env?: unknown;

    /**
     * A callback that will be invoked when the given path in the
     * environment has changed because a `$bind` value was written.
     */
    onChange?: (envPath: string) => void;

    /**
     * Set this flag `true` to use `computed`-based reactivity for managings
     * bindings and helpers within this UI. When `false` or unset, native
     * getters and setters will be used instead.
     */
    useClassicReactivity?: boolean;

    /**
     * An optional component that, if provided, will be invoked around each
     * component in this UI.
     */
    wrapper?: ComponentLike<{
      Args: {
        /** The {@link ComponentSpec} being wrapped. */
        componentSpec: ComponentSpec;

        /** The resolved config object the wrapped component will receive. */
        config: unknown;

        /** The env object the wrapped component will receive. */
        env: unknown;
      };
      Blocks: {
        default: [];
      };
    }>;
  };

  Blocks: {
    /**
     * If an error is encountered when processing the given UI spec, it
     * will be yielded to the default block.
     */
    default: [error: unknown];
  };
}>;

export default ExclaimUi;
