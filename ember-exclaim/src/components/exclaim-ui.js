import { computed, getProperties, get } from '@ember/object';
import { deprecatingAlias } from '@ember/object/computed';
import Component from '@ember/component';
import buildSpecProcessor from '../-private/build-spec-processor';
import Environment from '../-private/environment';

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

  baseEnv: computed('env', 'onChange', 'resolveFieldMeta', function () {
    const env = new Environment(
      get(this, 'env') || {},
      this.get('resolveFieldMeta')
    );
    const onChange = get(this, 'onChange');
    if (onChange) {
      env.on('change', onChange);
    }
    return env;
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
