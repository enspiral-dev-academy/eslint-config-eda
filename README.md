# eslint-config-eda

Linting configuration for Enspiral Dev Academy  (EDA) challenges and projects

## Installation

You'll first need to install [ESLint](http://eslint.org) and [`babel-eslint`](https://www.npmjs.com/package/babel-eslint):

```
$ npm i -D eslint babel-eslint
```

Next, install `eslint-config-eda` and dependencies:

```
$ npm i -D eslint-config-eda
```


## Usage

Add `eda` to the `extends` section of your `.eslintrc` configuration file (you can omit the `eslint-config-` prefix). This is what your `.eslintrc.json` should look like:

```json
{
  "extends": "eda"
}
```
