import { computed, getProperties, get } from '@ember/object';
import Component from '@ember/component';
import layout from './template';
import buildSpecProcessor from 'ember-exclaim/-private/build-spec-processor';
import Environment from 'ember-exclaim/-private/environment';

export default Component.extend({
  layout,

  ui: null,
  env: null,

  componentMap: null,

  resolveFieldMeta: () => {},
  onChange: () => {},

  baseEnv: computed('env', 'resolveFieldMeta', function() {
    const env = new Environment(get(this, 'env') || {}, this.get('resolveFieldMeta'));
    env.on('change', get(this, 'onChange'));
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

  specProcessor: computed('componentMap', function() {
    return buildSpecProcessor(getProperties(this, 'componentMap'));
  }),
});
