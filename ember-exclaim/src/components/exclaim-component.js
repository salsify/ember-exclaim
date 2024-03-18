import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import { extendEnv } from '../-private/env/index.js';

export default class ExclaimComponent extends Component {
  @cached get env() {
    return extendEnv(this.args.env, this.args.additionalEnvData);
  }

  get config() {
    return this.args.componentSpec?.resolveConfig?.(this.env);
  }
}
