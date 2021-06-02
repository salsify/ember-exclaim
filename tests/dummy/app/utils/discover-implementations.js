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
  const modulePrefixRegex = new RegExp(
    `^(${modulePrefix}|${podModulePrefix})/`
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
      } = require(key);
      if (!NAME) continue;

      const shortName = key
        .replace(fullComponentPrefix, '')
        .replace(/\/component$/, '');

      map[NAME] = {
        componentPath: `${componentPrefix
          .replace(modulePrefixRegex, '')
          .replace('components/', '')}/${shortName}`,
        name: NAME,
        description: DESCRIPTION,
        shorthandProperty: SHORTHAND_PROPERTY,
        properties: PROPERTIES,
        componentMeta: COMPONENT_META,
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
        name: NAME,
        description: DESCRIPTION,
        shorthandProperty: SHORTHAND_PROPERTY,
        properties: PROPERTIES,
        helperMeta: HELPER_META,
      };
    }
  }
  return map;
}
