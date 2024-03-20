import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import implementationMap from 'playground-app/implementation-map';

export default class ExampleController extends Controller {
  @tracked ui;
  @tracked env;

  implementationMap = implementationMap;

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
