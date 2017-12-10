import Ember from 'ember';
import { deserialize } from 'ember-leadlight';
import config from 'dummy/config/environment';
import discoverImplementations from 'dummy/utils/discover-implementations';
import samples from './samples';

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

const implementationMap = discoverImplementations(config.modulePrefix, {
  componentPrefix: 'components/exclaim-components',
  helperPrefix: 'utils/exclaim-helpers',
});

const docs = Object.values(implementationMap);
const componentDocs = docs.filter(doc => doc.componentPath);
const helperDocs = docs.filter(doc => doc.helper);

export default Controller.extend({
  queryParams: ['active'],
  active: -1,

  panes,
  samples,
  componentDocs,
  helperDocs,
  implementationMap,

  uiString: sampleValue('interface'),
  envString: sampleValue('environment'),
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
