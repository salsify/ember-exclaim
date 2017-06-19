import Ember from 'ember';
import layout from './template';
import { unwrap } from 'ember-exclaim';

const {
  get,
  computed,
  Component,
} = Ember;

export default Component.extend({
  layout,
  tagName: '',

  spec: null,
  env: null,

  effectiveEnv: computed('env', 'overrideEnv', function() {
    return get(this, 'overrideEnv') || get(this, 'env');
  }),

  resolvedConfig: computed('spec', 'effectiveEnv', function() {
    return unwrap(get(this, 'spec')).resolveConfig(get(this, 'effectiveEnv'));
  }),
});