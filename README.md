# eslint-config-eda

Linting configuration for Enspiral Dev Academy (EDA) challenges and projects. This is the x version that isn't pretty ... you're welcome

## Installation

Install this package along with the exact version (-E) of its peer dependency, [ESLint](http://eslint.org), as devDependencies (-D).

```json
$ npm i -DE eslint@7.9.0 eslint-config-eda@0.1.2
```

## Usage

Add `eda` to the `extends` section of your configuration file (you can omit the `eslint-config-` prefix). This is what your `.eslintrc.json` should look like:

```json
{
  "extends": "eda"
}
```
