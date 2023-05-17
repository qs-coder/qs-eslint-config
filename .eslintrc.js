module.exports = {
  root: true,
  extends: ['airbnb', '@antfu'],
  rules: {
    'curly': [2, 'all'],
    'import/prefer-default-export': 0,
    'vue/max-attributes-per-line': [2, { singleline: { max: 5 }, multiline: { max: 1 } }],
    'arrow-body-style': [2, 'as-needed'],
    'no-console': 0,
  },
}
