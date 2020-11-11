# @vta/eslint-config-vue

![npm](https://img.shields.io/npm/v/@vta/eslint-config-vue)

An eslint config set working with [@vta/eslint-config](https://github.com/vta-js/eslint-config/tree/master/packages/eslint-config), add support for **Vue** project

## Install

```bash
yarn add @vta/eslint-config-vue --dev
```

## Usage

```json
{
  "extends": ["@vta/vue"]
}
```

### Vscode Vetur Notice

In order to use prettier,please set **Script Initial Indent** and **Style Initial Indent** to `false`, and format all use `prettier`, and disable **Validation: Script**.

### Babel Support

If you want to use `Babel` to compile your code, you should firstly install **@vta/eslint-config-babel**, then extends `@vta/babel` in your `.eslintrc` file. additional usage please see [@vta/eslint-config-babel](https://github.com/vta-js/eslint-config/tree/master/packages/eslint-config-babel).

```bash
yarn add @vta/eslint-config-babel --dev
```

```json
{
  "extends": ["@vta/babel", "@vta/vue"]
}
```

NOTE: `@vta/vue` must list **after** `@vta/babel`

### Typescript Support

If you want to use `Typescript` to write your code, you should firstly install **@vta/eslint-config-typescript**, then extends `@vta/vue/typescript` in your `.eslintrc` file. additional usage please see [@vta/eslint-config-typescript](https://github.com/vta-js/eslint-config/tree/master/packages/eslint-config-typescript).

```bash
yarn add @vta/eslint-config-typescript --dev
```

```json
{
  "extends": ["@vta/typescript", "@vta/vue/typescript"]
}
```

NOTE: `@vta/vue/typescript` must list **after** `@vta/typescript`

### MIT License
