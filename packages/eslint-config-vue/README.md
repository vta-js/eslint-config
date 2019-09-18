# @vta/eslint-config-vue

![npm](https://img.shields.io/npm/v/@vta/eslint-config-react)

A superset of [@vta/eslint-config](https://github.com/vta-js/eslint-config/tree/master/packages/eslint-config/README.md), add support for **Vue** project

## Install

```bash
yarn add @vta/eslint-config-vue --dev
```

## Usage

```json
{
  "extends": ["@vta/eslint-config-vue"]
}
```

### Vscode Vetur Notice

In order to use prettier,please set **Script Initial Indent** and **Style Initial Indent** to `false`, and format all use `prettier`, and disable all validation.

### typescript support

If you want to use `Typescript` to write your code, you should firstly install **@vta/eslint-config-typescript**, then extends `@vta/eslint-config-react/typescript` in your `.eslintrc` file. additional usage please see [@vta/eslint-config-typescript](https://github.com/vta-js/eslint-config/tree/master/packages/eslint-config-typescript/README.md).

```bash
yarn add @vta/eslint-config-typescript --dev
```

```json
{
  "extends": ["@vta/eslint-config-vue/typescript"]
}
```

### MIT License
