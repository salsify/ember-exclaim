'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: ['ember-exclaim'],
    },
    ace: {
      themes: ['chrome'],
      modes: ['json'],
      workers: ['json'],
      workerPath:
        EmberApp.env() === 'production'
          ? '/ember-exclaim/assets/ace'
          : undefined,
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
