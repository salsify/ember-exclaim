import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import config from 'dummy/config/environment';
import discoverImplementations from 'dummy/utils/discover-implementations';

export default class ExampleController extends Controller {
  @tracked ui;
  @tracked env;

  implementationMap = discoverImplementations(config, {
    componentPrefix: 'components/exclaim-components',
    helperPrefix: 'utils/exclaim-helpers',
  });

  handleSave = async (event) => {
    if (event.ctrlKey && event.key === 's') {
      let historyURL = new URL(`fake:${location.hash.slice(1)}`);

      for (let prop of ['ui', 'env']) {
        if (this[prop]) {
          historyURL.searchParams.set(prop, this[prop]);
        } else {
          historyURL.searchParams.delete(prop);
        }
      }

      let fullURL = Object.assign(new URL(location.href), {
        hash: historyURL.toString().slice('fake:'.length),
      });

      await navigator.clipboard.writeText(fullURL.toString());
    }
  };
}
