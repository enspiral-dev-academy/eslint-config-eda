const defaults = require('./index')
module.exports = {
  parser: defaults.parser,
  parserOptions: {
    ...defaults.parserOptions,
    ecmaFeatures: { jsx: true },
  },
  env: defaults.env,
  plugins: [...defaults.plugins, 'react', 'jsx-a11y'],
  extends: [...defaults.extends, 'plugin:react/recommended', 'prettier/react', 'plugin:jsx-a11y/strict'],
  settings: {
    ...defaults.settings,
    react: { version: 'detect' },
    'import/resolver': { node: { extensions: ['.js', '.jsx'] } },
  },
  rules: {
    ...defaults.rules,
    'react/prop-types': 0,
  },
}
