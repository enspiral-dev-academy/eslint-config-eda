const defaults = require('./core')

module.exports = {
  ...defaults,
  env: { ...defaults.env, jest: true },
  plugins: [...defaults.plugins, 'jest'],
  extends: [
    ...defaults.extends,
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
}
