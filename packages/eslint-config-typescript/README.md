# @vta/eslint-config-typescript

![npm](https://img.shields.io/npm/v/@vta/eslint-config-typescript)

A superset of [@vta/eslint-config](../eslint-config/README.md), add support for **Typescript** project, intergrated with [@typescript-eslint](https://typescript-eslint.io)

## Install

```bash
yarn add @vta/eslint-config-typescript --dev
```

## Usage

```json
{
  "extends": ["@vta/eslint-config-typescript"]
}
```

we will firstly search `tsconfig.eslint.json` in your working directory to use for `@typescript-eslint/parser`, if cann't find , will use `tsconfig.json`, [view detail](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration)

### jest support

If you want to use `Jest` to test your files, you should firstly install **jest** and **ts-jest**, then just put a `jest.config.js` config file in your working directory.

```bash
yarn add jest,ts-jest --dev
```

```javascript
module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testMatch: ["<rootDir>/__tests__/**/*.[jt]s?(x)", "<rootDir>/**/*.(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/__tests__/(.+/)?data/", "/__tests__/(.+/)?utils/"],
  moduleNameMapper: {},
  collectCoverage: true,
};
```

### MIT License
