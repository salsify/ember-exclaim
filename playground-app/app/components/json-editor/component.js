import { get, action } from '@ember/object';
import Component from '@ember/component';

import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/mode-json';

import * as jsonWorkerUrl from 'ace-builds/src-noconflict/worker-json?resource';
import { config } from 'ace-builds';

config.setModuleUrl('ace/mode/json_worker', jsonWorkerUrl);

export default Component.extend({
  tagName: '',

  string: null,

  valueChanged: action(function (newString) {
    try {
      JSON.parse(newString);
      get(this, 'onChange')(newString);
    } catch (error) {
      // Ignore, just don't update
    }
  }),
});
