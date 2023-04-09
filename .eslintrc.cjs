module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'import',
    'unused-imports',
  ],
  rules: {
    /* eslint */
    'arrow-body-style': 'off',
    /* typescript */
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    /* import */
    'simple-import-sort/imports': 'off',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'alphabetize': {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['./*', '../*', '~/*', '~~/*'],
      },
    ],
  },
};
