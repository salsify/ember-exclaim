import Binding from './binding';
import ComponentSpec from './component-spec';
import HelperSpec, { HelperFunction } from './helper-spec';
import { transform, rule, simple, subtree, rest, Rule } from 'botanist';

export type HelperDetails = {
  helper: HelperFunction;
  helperMeta?: unknown;
  shorthandProperty?: string;
};

export type ComponentDetails = {
  componentPath: string;
  componentMeta?: unknown;
  shorthandProperty?: string;
};

export type ImplementationMap = Record<
  string,
  HelperDetails | ComponentDetails
>;

export type SpecProcessorOptions = {
  implementationMap: ImplementationMap;
};

export default function buildSpecProcessor({
  implementationMap,
}: SpecProcessorOptions): (input: unknown, options?: unknown) => unknown {
  return transform([
    ...buildBaseRules(implementationMap),
    ...buildShorthandRules(implementationMap),
  ]);
}

function buildBaseRules(
  implementationMap: ImplementationMap
): Array<Rule<unknown>> {
  return [
    rule({ $bind: simple('path') }, ({ path }) => {
      if (!path) {
        throw new Error(`Invalid binding: ""`);
      } else {
        return new Binding(path);
      }
    }),

    rule({ $helper: simple('name'), ...rest('config') }, ({ name, config }) => {
      const impl = implementationMap[name];
      if (impl && 'helper' in impl) {
        return new HelperSpec(impl.helper, config, impl.helperMeta);
      } else {
        throw new Error(`Unable to resolve helper ${name}`);
      }
    }),

    rule(
      { $component: simple('name'), ...rest('config') },
      ({ name, config }) => {
        const impl = implementationMap[name];
        if (impl && 'componentPath' in impl) {
          return new ComponentSpec(
            impl.componentPath,
            config,
            impl.componentMeta
          );
        } else {
          throw new Error(`Unable to resolve component ${name}`);
        }
      }
    ),
  ];
}

function buildShorthandRules(
  implementationMap: ImplementationMap
): Array<Rule<unknown>> {
  const rules: Array<Rule<unknown>> = [];

  Object.keys(implementationMap).forEach((name) => {
    const details = implementationMap[name];
    if ('componentPath' in details) {
      const rule = buildComponentRule(name, details);
      if (rule) {
        rules.push(rule);
      }
    } else if ('helper' in details) {
      const rule = buildHelperRule(name, details);
      if (rule) {
        rules.push(rule);
      }
    }
  });

  return rules;
}

type RuleData = { shorthandValue: string; config: Record<string, unknown> };

function buildComponentRule(
  name: string,
  { shorthandProperty, componentPath, componentMeta }: ComponentDetails
): Rule<unknown> | undefined {
  if (!shorthandProperty) return;

  return rule(
    { [`$${name}`]: subtree('shorthandValue'), ...rest('config') },
    ({ shorthandValue, config }: RuleData) => {
      const fullConfig = { [shorthandProperty]: shorthandValue, ...config };
      return new ComponentSpec(componentPath, fullConfig, componentMeta);
    }
  );
}

function buildHelperRule<Name extends string>(
  name: Name,
  { shorthandProperty, helper, helperMeta }: HelperDetails
): Rule<unknown> | undefined {
  if (!shorthandProperty) return;

  return rule(
    { [`$${name}` as const]: subtree('shorthandValue'), ...rest('config') },
    ({ shorthandValue, config }: RuleData) => {
      const fullConfig = { [shorthandProperty]: shorthandValue, ...config };
      return new HelperSpec(helper, fullConfig, helperMeta);
    }
  );
}
