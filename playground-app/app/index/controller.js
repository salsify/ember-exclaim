import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import implementationMap from 'playground-app/implementation-map';
import samples from './samples';
import { TrackedObject } from 'tracked-built-ins/.';

export default class IndexController extends Controller {
  queryParams = ['active'];

  @tracked active = -1;
  @tracked uiString = this.samples[this.active]?.interface ?? '';
  @tracked envString = this.samples[this.active]?.environment ?? '';

  samples = samples;
  implementationMap = implementationMap;

  onSampleSelect = (event) => {
    this.active = Number(event.target.value);

    let sample = this.samples[this.active];
    if (sample) {
      this.uiString = sample.interface ?? '';
      this.envString = sample.environment ?? '';
    }
  };

  get ui() {
    return JSON.parse(this.uiString || '{}');
  }

  get env() {
    return new TrackedObject(JSON.parse(this.envString || '{}'));
  }
}
