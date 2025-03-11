module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // https://github.com/benmosher/eslint-plugin-import
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    // https://github.com/Intellicode/eslint-plugin-react-native
    'react-native/no-color-literals': 'off',
  },
  overrides: [
    {
      files: ['*.js', '**/.*.js'],
    },
  ],
}
