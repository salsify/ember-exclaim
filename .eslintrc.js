'use strict';

const emberRules = {
  'ember/avoid-leaking-state-in-ember-objects': 'off',
  'ember/no-jquery': 'error',
  // Needed to work with `unknownProperty` for now
  'ember/no-get': 'off',
  'ember/no-computed-properties-in-native-classes': 'off',
  // Needed until we drop support for pre-Octane Ember
  'ember/no-classic-classes': 'off',
  'ember/no-classic-components': 'off',
  'ember/require-tagless-components': 'off',
};

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['ember'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  rules: { ...emberRules },
  overrides: [
    // TypeScript
    {
      files: '*.ts',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:ember/recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: { ...emberRules },
    },
    // node files
    {
      files: [
        '.eslintrc.js',
        '.prettierrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
    },
  ],
};
