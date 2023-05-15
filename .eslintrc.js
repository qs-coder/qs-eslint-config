module.exports = {
  root: true,
  extends: ['airbnb', '@antfu'],
  rules: {
    'curly': ['error', 'all'],
    'import/prefer-default-export': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: { max: 5 }, multiline: { max: 1 } }],
  },
}
