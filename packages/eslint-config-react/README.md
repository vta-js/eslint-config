# @vta/eslint-config-react

[![npm](https://img.shields.io/npm/v/@vta/eslint-config-react)](https://www.npmjs.com/package/@vta/eslint-config-react)

an eslint config set working with [@vta/eslint-config](https://github.com/vta-js/eslint-config/tree/master/packages/eslint-config), add support for **React** project

## Install

```bash
yarn add @vta/eslint-config-react --dev
```

## Usage

```json
{
  "extends": ["@vta/react"]
}
```

### Babel Support

If you want to use `Babel` to compile your code, you should firstly install **@vta/eslint-config-babel**, then extends `@vta/babel` in your `.eslintrc` file. additional usage please see [@vta/eslint-config-babel](https://github.com/vta-js/eslint-config/tree/master/packages/eslint-config-babel).

```bash
yarn add @vta/eslint-config-babel --dev
```

```json
{
  "extends": ["@vta/babel", "@vta/react"]
}
```

NOTE: `@vta/react` must list **after** `@vta/babel`

### Typescript Support

If you want to use `Typescript` to write your code, you should firstly install **@vta/eslint-config-typescript**, then extends `@vta/react/typescript` in your `.eslintrc` file. additional usage please see [@vta/eslint-config-typescript](https://github.com/vta-js/eslint-config/tree/master/packages/eslint-config-typescript).

```bash
yarn add @vta/eslint-config-typescript --dev
```

```json
{
  "extends": ["@vta/typescript", "@vta/react/typescript"]
}
```

NOTE: `@vta/react/typescript` must list **after** `@vta/typescript`

### MIT License
