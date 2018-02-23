import Binding from './binding';
import ComponentSpec from './component-spec';
import {
  transform,
  rule,
  simple,
  subtree,
  rest
} from 'botanist';

export default function buildSpecProcessor({ componentMap }) {
  return transform([
    buildBaseRules(componentMap),
    buildShorthandRules(componentMap),
  ]);
}

function buildBaseRules(componentMap) {
  return {
    @rule({ $bind: simple('path') })
    createBinding({ path }) {
      if (!path) {
        throw new Error(`Invalid binding: ""`);
      } else {
        return new Binding(path);
      }
    },

    @rule({ $component: simple('name'), ...rest('config') })
    createComponentSpec({ name, config }) {
      if (componentMap.hasOwnProperty(name)) {
        return new ComponentSpec(componentMap[name].componentPath, config, componentMap[name].componentMeta);
      } else {
        throw new Error(`Unable to resolve component ${name}`);
      }
    }
  };
}

function buildShorthandRules(componentMap) {
  let rules = [];
  Object.keys(componentMap).forEach((name) => {
    let details = componentMap[name];
    if (details.shorthandProperty) {
      rules.push(buildShorthandRule(name, details));
    }
  });
  return rules;
}

function buildShorthandRule(name, { shorthandProperty, componentPath, componentMeta }) {
  return {
    @rule({ [`$${name}`]: subtree('shorthandValue'), ...rest('config') })
    createComponentSpec({ shorthandValue, config }) {
      let fullConfig = { [shorthandProperty]: shorthandValue, ...config };
      return new ComponentSpec(componentPath, fullConfig, componentMeta);
    }
  };
}
