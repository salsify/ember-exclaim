import Binding from './binding';
import ComponentSpec from './component-spec';
import { transform, rule, simple, rest } from 'botanist';

export default function buildSpecProcessor({ bindKey, componentKey }) {
  return transform({
    @rule({ [bindKey]: simple('path') })
    createBinding({ path }) {
      if (!path) {
        throw new Error(`Invalid binding: ""`);
      } else {
        return new Binding(path);
      }
    },

    @rule({ [componentKey]: simple('name'), ...rest('config') })
    createComponentSpec({ name, config }, { resolveComponent, owner }) {
      const resolved = resolveComponent(name);
      if (!owner.hasRegistration(`component:${resolved}`)) {
        throw new Error(`Unable to resolve component ${name}`);
      } else {
        return new ComponentSpec(resolved, config);
      }
    }
  });
}
