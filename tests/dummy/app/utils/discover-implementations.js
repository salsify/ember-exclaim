/* global require */
import Ember from 'ember';

export default function discoverImplementations(modulePrefix, { componentPrefix, helperPrefix }) {
  let fullComponentPrefix = `${modulePrefix}/${componentPrefix}/`;
  let fullHelperPrefix = `${modulePrefix}/${helperPrefix}/`;

  Ember.assert('`componentPrefix` must start with `components/`', componentPrefix.indexOf('components/') === 0);

  let map = {};
  for (let key of Object.keys(require.entries)) {
    if (key.startsWith(fullComponentPrefix)) {
      let { NAME, DESCRIPTION, PROPERTIES, SHORTHAND_PROPERTY, COMPONENT_META } = require(key);
      if (!NAME) continue;

      let shortName = key.replace(fullComponentPrefix, '').replace(/\/component$/, '')

      map[NAME] = {
        componentPath: `${componentPrefix.replace('components/', '')}/${shortName}`,
        name: NAME,
        description: DESCRIPTION,
        shorthandProperty: SHORTHAND_PROPERTY,
        properties: PROPERTIES,
        componentMeta: COMPONENT_META,
      };
    } else if (key.startsWith(fullHelperPrefix)) {
      let { NAME, DESCRIPTION, PROPERTIES, SHORTHAND_PROPERTY, HELPER_META, default: helper } = require(key);
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
