'use strict';

const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            'ember-source': '~3.28.0',
            'ember-cli': '~3.28.0',
            // Work around https://github.com/emberjs/ember-test-helpers/issues/1232#issuecomment-1460247238
            '@ember/test-helpers': '~2.7.0',
            'ember-qunit': '~6.0.0',
          },
        },
      },
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            'ember-source': '~4.4.0',
            // Work around https://github.com/emberjs/ember-test-helpers/issues/1232#issuecomment-1460247238
            '@ember/test-helpers': '~2.7.0',
            'ember-qunit': '~6.0.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': 'latest',
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
