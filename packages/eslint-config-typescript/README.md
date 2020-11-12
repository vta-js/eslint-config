# @vta/eslint-config-typescript

[![npm](https://img.shields.io/npm/v/@vta/eslint-config-typescript)](https://www.npmjs.com/package/@vta/eslint-config-typescript)

A superset of [@vta/eslint-config](https://github.com/vta-js/eslint-config/tree/master/packages/eslint-config), add support for **Typescript** project, intergrated with [@typescript-eslint](https://typescript-eslint.io)

## Install

```bash
yarn add @vta/eslint-config-typescript --dev
```

## Usage

```json
{
  "extends": ["@vta/typescript"]
}
```

We will firstly search `tsconfig.eslint.json` in your working directory to use for `@typescript-eslint/parser`, if cann't find , will use `tsconfig.json`, [view detail](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration).

> if you want to use one specific tsconfig file,please use like this in your .eslintrc.json

```json
{
  "parserOptions": {
    "project": "your tsconfig relative to working directory"
  }
}
```

**All files that need to lint should list in your tsconfig file**. If you want to lint react/vue or others files,please add them to your tsconfig's include

```json
{
  "exclude": ["node_modules"],
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx", "src/**/*.vue"],
  "compilerOptions": {}
}
```

### MIT License
