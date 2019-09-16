# @vta/eslint-config-react

![npm](https://img.shields.io/npm/v/@vta/eslint-config-react)

A superset of [@vta/eslint-config](../eslint-config/README.md), add support for **React** project

## Install

```bash
yarn add @vta/eslint-config-react --dev
```

## Usage

```json
{
  "extends": ["@vta/eslint-config-react"]
}
```

### typescript support

If you want to use `Typescript` to write your code, you should firstly install **@vta/eslint-config-typescript**, then extends `@vta/eslint-config-react/typescript` in your `.eslintrc` file. additional usage please see [@vta/eslint-config-typescript](../eslint-config-typescript/README.md).

```bash
yarn add @vta/eslint-config-typescript --dev
```

```json
{
  "extends": ["@vta/eslint-config-react/typescript"]
}
```

### MIT License
