/** Rules for TypeScript code. */
module.exports = {
  // eslint-disable-next-line node/no-unpublished-require
  parser: require.resolve('@typescript-eslint/parser'),
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],

    // Disallow the use of bare `Function`, `Object` and boxed types
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Function: {
            fixWith: '() => unknown',
            message:
              'Avoid `Function` in favor of a more precise callable type.',
          },

          String: {
            fixWith: 'string',
            message:
              'Avoid boxed types. See https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types',
          },

          Number: {
            message:
              'Avoid boxed types. See https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types',
            fixWith: 'number',
          },

          Symbol: {
            message:
              'Avoid boxed types. See https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types',
            fixWith: 'symbol',
          },

          Boolean: {
            message:
              'Avoid boxed types. See https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types',
            fixWith: 'boolean',
          },
        },
      },
    ],

    // We prefer `type` to `interface` for consistency, but unfortunately the lint rule for that
    // is applied universally, including in `declare` blocks where changing an `interface` to a
    // `type` breaks the intended semantics. It may be worth seeing if we can get that rule updated
    // not to apply in places like that, but for now we just disable it.
    //
    // See https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-empty-interface': 'off',

    // @ts-ignore is something we should generally avoid, but shouldn't need to include
    // a static directive to allow us to insert other static directives.
    '@typescript-eslint/ban-ts-comment': 'off',

    // Only require return type annotations on declarations
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],

    // Require explicit visibility (`public`/`private`/`protected`) on class members
    '@typescript-eslint/explicit-member-accessibility': 'error',

    // These default to warnings rather than errors
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // Allow use of empty arrow functions
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['arrowFunctions'] },
    ],
  },
};
