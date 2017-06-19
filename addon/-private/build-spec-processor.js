import Binding from './binding';
import ComponentSpec from './component-spec';
import { transform, rule, simple, subtree, rest } from 'botanist';

export default function buildSpecProcessor({ bindKey, componentKey, componentMap }) {
  return transform([
    buildBaseRules({ bindKey, componentKey, componentMap }),
    buildShorthandRules(componentMap),
  ]);
}

function buildBaseRules({ bindKey, componentKey, componentMap }) {
  return {
    @rule({ [bindKey]: simple('path') })
    createBinding({ path }) {
      if (!path) {
        throw new Error(`Invalid binding: ""`);
      } else {
        return new Binding(path);
      }
    },

    @rule({ [componentKey]: simple('name'), ...rest('config') })
    createComponentSpec({ name, config }) {
      if (componentMap.hasOwnProperty(name)) {
        return new ComponentSpec(componentMap[name].componentPath, config);
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

function buildShorthandRule(name, { shorthandProperty, componentPath }) {
  return {
    @rule({ [`$${name}`]: subtree('shorthandValue'), ...rest('config') })
    createComponentSpec({ shorthandValue, config }) {
      let fullConfig = { [shorthandProperty]: shorthandValue, ...config };
      return new ComponentSpec(componentPath, fullConfig);
    }
  };
}
