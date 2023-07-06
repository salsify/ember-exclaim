'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    // Temporarily disabled while the codebase is modernized
    'no-curly-component-invocation': 'off',
    'no-action': 'off',
    // Unnecessary for tests
    'require-input-label': 'off',
  },
};
