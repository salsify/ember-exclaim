import { setComponentTemplate } from '@ember/component';

/* global require */
export default function discoverImplementations(
  { modulePrefix, podModulePrefix },
  { componentPrefix, helperPrefix }
) {
  const fullComponentPrefix = new RegExp(
    `^(${modulePrefix}|${podModulePrefix})/${componentPrefix}/`
  );
  const fullHelperPrefix = new RegExp(
    `^(${modulePrefix}|${podModulePrefix})/${helperPrefix}/`
  );

  const map = {};
  for (const key of Object.keys(require.entries)) {
    if (componentPrefix && fullComponentPrefix.test(key)) {
      const {
        NAME,
        DESCRIPTION,
        SHORTHAND_PROPERTY,
        PROPERTIES,
        COMPONENT_META,
        default: component,
      } = require(key);
      if (!NAME) continue;

      setComponentTemplate(
        require(key.replace(/component$/, 'template')).default,
        component
      );

      map[NAME] = {
        component,
        shorthandProperty: SHORTHAND_PROPERTY,
        meta: {
          name: NAME,
          description: DESCRIPTION,
          properties: PROPERTIES,
          ...COMPONENT_META,
        },
      };
    } else if (helperPrefix && fullHelperPrefix.test(key)) {
      const {
        NAME,
        DESCRIPTION,
        SHORTHAND_PROPERTY,
        PROPERTIES,
        HELPER_META,
        default: helper,
      } = require(key);
      if (!NAME) continue;

      map[NAME] = {
        helper,
        shorthandProperty: SHORTHAND_PROPERTY,
        meta: {
          name: NAME,
          description: DESCRIPTION,
          properties: PROPERTIES,
          ...HELPER_META,
        },
      };
    }
  }
  return map;
}
