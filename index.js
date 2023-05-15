const eslintrc = require('./.eslintrc')

module.exports = eslintrc

function main() {
  return add(4, 5)
}

function add(a, b) {
  if (a > 4) {
    return a + b
  }
  return a - b
}
