import Component from '@glimmer/component';
import templateOnlyComponent from '@ember/component/template-only';
import { makeEnv } from '../-private/env/index.js';
import buildSpecProcessor from '../-private/build-spec-processor';
import * as computedEnv from '../-private/env/computed.js';
import * as trackedEnv from '../-private/env/tracked.js';

const DefaultWrapper = templateOnlyComponent();

export default class ExclaimUi extends Component {
  get env() {
    const envImpl = this.args.useClassicReactivity ? computedEnv : trackedEnv;
    return makeEnv(this.args.env ?? {}, this.args.onChange, envImpl);
  }

  get content() {
    try {
      const { ui, implementationMap } = this.args;
      const processor = buildSpecProcessor({ implementationMap });
      return { componentSpec: processor(ui) };
    } catch (error) {
      return { error };
    }
  }

  get wrapper() {
    return this.args.wrapper ?? DefaultWrapper;
  }
}
