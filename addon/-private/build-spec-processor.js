import Binding from './binding';
import ComponentSpec from './component-spec';
import { transform, rule, simple, rest } from 'botanist';

export default function buildSpecProcessor({ bindKey, componentKey }) {
  return transform({
    @rule({ [bindKey]: simple('name') })
    createBinding({ name }) {
      if (!name) {
        throw new Error(`Invalid binding: ""`);
      } else {
        return new Binding(name);
      }
    },

    @rule({ [componentKey]: simple('name'), ...rest('config') })
    createComponentSpec({ name, config }, { resolveComponent, owner }) {
      const path = resolveComponent(name);
      if (!owner.hasRegistration(`component:${path}`)) {
        throw new Error(`Unable to resolve component ${name}`);
      } else {
        return new ComponentSpec(path, config);
      }
    }
  });
}
