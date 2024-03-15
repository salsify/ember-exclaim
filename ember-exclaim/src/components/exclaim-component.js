import { computed } from '@ember/object';
import Component from '@ember/component';
import { extendEnv } from '../-private/env/index.js';

export default Component.extend({
  tagName: '',

  componentSpec: null,
  env: null,

  effectiveEnv: computed('env', 'overrideEnv', function () {
    if (this.overrideEnv) {
      return extendEnv(this.env, this.overrideEnv);
    } else {
      return this.env;
    }
  }),

  resolvedConfig: computed('componentSpec', 'effectiveEnv', function () {
    return this.componentSpec?.resolveConfig?.(this.effectiveEnv);
  }),
});
