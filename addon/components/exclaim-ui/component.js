import Ember from 'ember';
import layout from './template';
import buildSpecProcessor from 'ember-exclaim/-private/build-spec-processor';
import Environment from 'ember-exclaim/-private/environment';

const {
  get,
  getProperties,
  getOwner,
  computed,
  Component,
} = Ember;

export default Component.extend({
  layout,

  bindKey: '$bind',
  componentKey: '$component',

  ui: null,
  env: null,

  resolveComponent: null,

  baseEnv: computed('env', function() {
    return new Environment(get(this, 'env') || {});
  }),

  content: computed('specProcessor', 'ui', 'resolveComponent', function() {
    const processor = get(this, 'specProcessor');
    const ui = get(this, 'ui');
    const resolveComponent = get(this, 'resolveComponent');
    const owner = getOwner(this);

    try {
      return { spec: processor(ui, { resolveComponent, owner }) };
    } catch (error) {
      return { error };
    }
  }),

  specProcessor: computed('bindKey', 'componentKey', function() {
    return buildSpecProcessor(getProperties(this, 'bindKey', 'componentKey'));
  }),
});
