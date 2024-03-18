import { computed, getProperties, get } from '@ember/object';
import Component from '@ember/component';
import buildSpecProcessor from '../-private/build-spec-processor';
import { makeEnv } from '../-private/env/index.js';
import * as computedEnv from '../-private/env/computed.js';
import * as trackedEnv from '../-private/env/tracked.js';

export default Component.extend({
  ui: null,
  env: null,
  implementationMap: null,
  useClassicReactivity: false,

  baseEnv: computed('env', 'onChange', 'useClassicReactivity', function () {
    const envImpl = this.useClassicReactivity ? computedEnv : trackedEnv;
    return makeEnv(this.env ?? {}, this.onChange, envImpl);
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
