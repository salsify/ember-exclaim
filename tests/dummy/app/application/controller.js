import Ember from 'ember';
import { deserialize } from 'ember-leadlight';
import samples from './samples';
import docs from './docs';

const {
  get,
  computed,
  Controller,
} = Ember;

const panes = deserialize([
  [0, { data: true }],
  [0, { config: true }],
  [
    [0, { render: true }],
    [0, { docs: true }],
  ],
]);

export default Controller.extend({
  queryParams: ['active'],
  active: -1,

  panes,
  samples,
  docs,

  uiString: sampleValue('interface'),
  envString: sampleValue('environment'),

  resolveComponent(name) {
    return `exclaim-components/${name}`;
  },
});

function sampleValue(key) {
  return computed('active', {
    get() {
      return get(this, `samples.${get(this, 'active')}.${key}`) || '';
    },

    set(key, value) {
      return value;
    }
  });
}
