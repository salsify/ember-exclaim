import { computed, get } from '@ember/object';
import Controller from '@ember/controller';
import config from 'dummy/config/environment';
import discoverImplementations from 'dummy/utils/discover-implementations';
import samples from './samples';

const implementationMap = discoverImplementations(config, {
  componentPrefix: 'components/exclaim-components',
  helperPrefix: 'utils/exclaim-helpers',
});

const docs = Object.values(implementationMap);
const componentDocs = docs.filter(doc => doc.componentPath);
const helperDocs = docs.filter(doc => doc.helper);

export default Controller.extend({
  queryParams: ['active'],
  active: -1,

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
