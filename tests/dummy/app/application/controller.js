import { computed, get } from '@ember/object';
import Controller from '@ember/controller';
import { deserialize } from 'ember-leadlight';
import config from 'dummy/config/environment';
import discoverComponents from 'dummy/utils/discover-components';
import samples from './samples';

const panes = deserialize([
  [0, { data: true }],
  [0, { config: true }],
  [
    [0, { render: true }],
    [0, { docs: true }],
  ],
]);

const componentMap = discoverComponents(config.modulePrefix, 'exclaim-components');
const docs = Object.values(componentMap);

export default Controller.extend({
  queryParams: ['active'],
  active: -1,

  panes,
  samples,
  docs,
  componentMap,

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
