/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-exclaim',

  options: {
    babel: {
      plugins: [
        'transform-decorators-legacy',
        'transform-object-rest-spread'
      ],
    },
  },
};
