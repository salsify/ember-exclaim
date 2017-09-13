import Ember from 'ember';
import layout from './template';
import buildSpecProcessor from 'ember-exclaim/-private/build-spec-processor';
import Environment from 'ember-exclaim/-private/environment';

const {
  get,
  getProperties,
  computed,
  Component,
} = Ember;

export default Component.extend({
  layout,

  ui: null,
  env: null,

  componentMap: null,

  resolveMeta: () => {},
  onChange: () => {},

  baseEnv: computed('env', 'resolveMeta', function() {
    const env = new Environment(get(this, 'env') || {}, this.get('resolveMeta'));
    env.on('change', get(this, 'onChange'));
    return env;
  }),

  content: computed('specProcessor', 'ui', function() {
    const processor = get(this, 'specProcessor');
    const ui = get(this, 'ui');

    try {
      return { spec: processor(ui) };
    } catch (error) {
      return { error };
    }
  }),

  specProcessor: computed('componentMap', function() {
    return buildSpecProcessor(getProperties(this, 'componentMap'));
  }),
});
