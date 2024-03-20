import Component from '@glimmer/component';

import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/mode-json';

import * as jsonWorkerUrl from 'ace-builds/src-noconflict/worker-json?resource';
import { config } from 'ace-builds';

config.setModuleUrl('ace/mode/json_worker', jsonWorkerUrl);

export default class JsonEditor extends Component {
  valueChanged = (newString) => {
    try {
      JSON.parse(newString);
      this.args.onChange(newString);
    } catch {
      // Ignore, just don't update
    }
  };
}
