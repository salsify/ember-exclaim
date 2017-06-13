import Ember from 'ember';
import { unwrap } from 'ember-exclaim';

const {
  get,
  computed,
  Component,
} = Ember;

export default Component.extend({
  tagName: '',

  boundEnv: computed('config.bindings', 'env', function() {
    const env = get(this, 'env');
    const bindings = unwrap(get(this, 'config.bindings'));
    return bindings ? env.extend(bindings) : env;
  }),
});
