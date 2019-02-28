import { computed, getProperties, get } from '@ember/object';
import { deprecatingAlias } from '@ember/object/computed';
import Component from '@ember/component';
import layout from './template';
import buildSpecProcessor from 'ember-exclaim/-private/build-spec-processor';
import Environment from 'ember-exclaim/-private/environment';

export default Component.extend({
  layout,

  ui: null,
  env: null,

  implementationMap: null,
  componentMap: deprecatingAlias('implementationMap', {
    id: 'ember-exclaim.component-map',
    until: '2.0.0',
  }),

  resolveFieldMeta: () => {},
  onChange: () => {},

  baseEnv: computed('env', 'resolveFieldMeta', function() {
    const env = new Environment(get(this, 'env') || {}, this.get('resolveFieldMeta'));
    const onChange = get(this, 'onChange');
    if (onChange) {
      env.on('change', onChange);
    }
    return env;
  }),

  content: computed('specProcessor', 'ui', function() {
    const processor = get(this, 'specProcessor');
    const ui = get(this, 'ui');

    try {
      return { componentSpec: processor(ui) };
    } catch (error) {
      return { error };
    }
  }),

  specProcessor: computed('implementationMap', function() {
    return buildSpecProcessor(getProperties(this, 'implementationMap'));
  }),
});
