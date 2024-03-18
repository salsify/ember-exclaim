import Component from '@glimmer/component';
import { extendEnv } from '../-private/env/index.js';

export default class ExclaimComponent extends Component {
  get componentData() {
    let env = extendEnv(this.args.env, this.args.additionalEnvData);
    let config = this.args.componentSpec?.resolveConfig?.(env);
    return { env, config };
  }
}
