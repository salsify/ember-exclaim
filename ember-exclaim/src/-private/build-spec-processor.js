import { transform, rule, simple, subtree, rest } from 'botanist';
import { ComponentSpec, HelperSpec, Binding } from './ui-spec.js';

const hasOwnProperty = Function.prototype.call.bind(
  Object.prototype.hasOwnProperty,
);

export default function buildSpecProcessor({ implementationMap }) {
  return transform([
    buildBaseRules(implementationMap),
    buildShorthandRules(implementationMap),
  ]);
}

function buildBaseRules(implementationMap) {
  return [
    rule({ $bind: simple('path') }, ({ path }) => {
      if (!path) {
        throw new Error(`Invalid binding: ""`);
      } else {
        return new Binding(path);
      }
    }),

    rule({ $helper: simple('name'), ...rest('config') }, ({ name, config }) => {
      if (
        hasOwnProperty(implementationMap, name) &&
        implementationMap[name].helper
      ) {
        return new HelperSpec(
          implementationMap[name].helper,
          config,
          implementationMap[name].helperMeta,
        );
      } else {
        throw new Error(`Unable to resolve helper ${name}`);
      }
    }),

    rule(
      { $component: simple('name'), ...rest('config') },
      ({ name, config }) => {
        if (
          hasOwnProperty(implementationMap, name) &&
          implementationMap[name].componentPath
        ) {
          return new ComponentSpec(
            implementationMap[name].componentPath,
            config,
            implementationMap[name].componentMeta,
          );
        } else {
          throw new Error(`Unable to resolve component ${name}`);
        }
      },
    ),
  ];
}

function buildShorthandRules(implementationMap) {
  let rules = [];

  Object.keys(implementationMap).forEach((name) => {
    let details = implementationMap[name];
    if (details.shorthandProperty) {
      if (details.componentPath) {
        rules.push(buildComponentRule(name, details));
      } else if (details.helper) {
        rules.push(buildHelperRule(name, details));
      }
    }
  });

  return rules;
}

function buildComponentRule(
  name,
  { shorthandProperty, componentPath, componentMeta },
) {
  return rule(
    { [`$${name}`]: subtree('shorthandValue'), ...rest('config') },
    ({ shorthandValue, config }) => {
      let fullConfig = { [shorthandProperty]: shorthandValue, ...config };
      return new ComponentSpec(componentPath, fullConfig, componentMeta);
    },
  );
}

function buildHelperRule(name, { shorthandProperty, helper, helperMeta }) {
  return rule(
    { [`$${name}`]: subtree('shorthandValue'), ...rest('config') },
    ({ shorthandValue, config }) => {
      let fullConfig = { [shorthandProperty]: shorthandValue, ...config };
      return new HelperSpec(helper, fullConfig, helperMeta);
    },
  );
}
