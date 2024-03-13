import { computed, get } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  componentSpec: null,
  env: null,

  effectiveEnv: computed('env', 'overrideEnv', function () {
    return get(this, 'overrideEnv') || get(this, 'env');
  }),

  resolvedConfig: computed('componentSpec', 'effectiveEnv', function () {
    const componentSpec = get(this, 'componentSpec');
    return (
      componentSpec && componentSpec.resolveConfig(get(this, 'effectiveEnv'))
    );
  }),
});
