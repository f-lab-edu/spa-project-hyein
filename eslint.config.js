import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['src/js/axios.min.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        module: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      camelcase: ['error', { properties: 'always' }],
      semi: ['error', 'always'],
      'no-use-before-define': ['error', { functions: false, classes: true }],
      'no-duplicate-imports': 'error',
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'never',
        },
      ],
      'prettier/prettier': 'error',
    },
  },
  prettierConfig,
];
