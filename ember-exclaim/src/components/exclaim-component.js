import { computed, get } from '@ember/object';
import Component from '@ember/component';
import { unwrap } from '../-private/environment';

export default Component.extend({
  tagName: '',

  componentSpec: null,
  env: null,

  unwrappedSpec: computed('componentSpec', function () {
    return unwrap(get(this, 'componentSpec'));
  }),

  effectiveEnv: computed('env', 'overrideEnv', function () {
    return get(this, 'overrideEnv') || get(this, 'env');
  }),

  resolvedConfig: computed('unwrappedSpec', 'effectiveEnv', function () {
    const unwrappedSpec = get(this, 'unwrappedSpec');
    return (
      unwrappedSpec.resolveConfig &&
      unwrappedSpec.resolveConfig(get(this, 'effectiveEnv'))
    );
  }),
});
