module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 5
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/newline-before-return': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    curly: ['error', 'multi-line'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'template-curly-spacing': ['error', 'always']
  }
}
