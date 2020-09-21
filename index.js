module.exports = {
  env: [
    "browser",
    "node",
    "es2020",
    "jest"
  ],
  plugins: [
    "import",
    "jest",
    "node",
    "promise",
    "react",
    "standard"
  ],
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/react",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:react/recommended",
    "plugin:promise/recommended"
  ],
  rules: {
    "eol-last": [
     "error",
     "always"
    ],
    "no-multiple-empty-lines": [
     "error",
     {
      "max": 1,
      "maxEOF": 0,
      "maxBOF": 0
     }
    ],
    "object-curly-spacing": [2, "always"],
    "react/prop-types": 0
  }
}
