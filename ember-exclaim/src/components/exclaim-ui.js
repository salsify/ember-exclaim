import { computed, getProperties, get } from '@ember/object';
import { deprecatingAlias } from '@ember/object/computed';
import Component from '@ember/component';
import buildSpecProcessor from '../-private/build-spec-processor';
import { makeEnv } from '../-private/env/index.js';
import * as computedEnv from '../-private/env/computed.js';

export default Component.extend({
  ui: null,
  env: null,

  implementationMap: null,
  componentMap: deprecatingAlias('implementationMap', {
    id: 'ember-exclaim.component-map',
    until: '2.0.0',
  }),

  resolveFieldMeta: () => {},
  onChange: () => {},

  baseEnv: computed('env', 'onChange', function () {
    return makeEnv(this.env ?? {}, this.onChange, computedEnv);
  }),

  content: computed('specProcessor', 'ui', function () {
    const processor = get(this, 'specProcessor');
    const ui = get(this, 'ui');

    try {
      return { componentSpec: processor(ui) };
    } catch (error) {
      return { error };
    }
  }),

  specProcessor: computed('implementationMap', function () {
    return buildSpecProcessor(getProperties(this, 'implementationMap'));
  }),

  wrapperComponentName: computed('wrapper', function () {
    return get(this, 'wrapper') || 'exclaim-default-component-wrapper';
  }),
});
