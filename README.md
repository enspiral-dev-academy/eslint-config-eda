# eslint-plugin-eda

Linting configuration for Enspiral Dev Academy  (EDA) challenges and projects

## Installation

You'll first need to install [ESLint](http://eslint.org) and [`babel-eslint`](https://www.npmjs.com/package/babel-eslint):

```
$ npm i -D eslint babel-eslint
```

Next, install `eslint-plugin-eda` and dependencies:

```
$ npm i -D eslint-plugin-eda
```


## Usage

Add `eda` to the plugins section of your `.eslintrc` configuration file (you can omit the `eslint-plugin-` prefix) and then configure it under the `extends` section. This is what your `.eslintrc.json` should look like after adding `parser` and `settings` sections:

```json
{
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {"jsx": true}
  },
  "settings": {
    "react": {"version": "detect"},
    "import/resolver": {"node": {"extensions": [".js",".jsx"]}}
  },
  "plugins": ["eda"],
  "extends": {"eda/recommended"}
}
```
