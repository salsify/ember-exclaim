/* global require */

export default function discoverComponents(modulePrefix, componentPrefix) {
  let fullPrefix = `${modulePrefix}/components/${componentPrefix}/`;

  let components = {};
  for (let key of Object.keys(require.entries)) {
    if (key.startsWith(fullPrefix)) {
      let { NAME, DESCRIPTION, PROPERTIES, SHORTHAND_PROPERTY, COMPONENT_META } = require(key);
      if (!NAME) continue;

      let shortName = key.replace(fullPrefix, '').replace(/\/component$/, '')

      components[NAME] = {
        componentPath: `${componentPrefix}/${shortName}`,
        name: NAME,
        description: DESCRIPTION,
        shorthandProperty: SHORTHAND_PROPERTY,
        properties: PROPERTIES,
        componentMeta: COMPONENT_META,
      };
    }
  }
  return components;
}
