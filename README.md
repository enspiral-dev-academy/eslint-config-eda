# eslint-config-eda

Linting configuration for Enspiral Dev Academy (EDA) challenges and projects

## Installation

Install this package along with a specific version of its peer dependency, [ESLint](http://eslint.org), as devDependencies.

```
$ npm i -DE eslint@7.9.0 eslint-config-eda
```

## Usage

Add `eda` to the `extends` section of your configuration file (you can omit the `eslint-config-` prefix). This is what your `.eslintrc.json` should look like:

```json
{
  "extends": "eda"
}
```
