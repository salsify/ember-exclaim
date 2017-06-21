/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    ace: {
      themes: ['chrome'],
      modes: ['json'],
      workers: ['json'],
    }
  });

  return app.toTree();
};
