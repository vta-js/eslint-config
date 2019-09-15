# @vta/eslint-config

![npm](https://img.shields.io/npm/v/@vta/eslint-config)

Eslint config for pure `Javascript/Node` project, intergrated with [Airbnb](https://github.com/airbnb/javascript), [Prettier](https://prettier.io/) and [Jest](https://jestjs.io/).

## Install

```bash
yarn add @vta/eslint-config --dev
```

## Usage

```json
{
  "extends": ["@vta/eslint-config"]
}
```

### prettier support

If you want to use `Prettier` to format your files, you should firstly install **prettier**, then just put a `.prettierrc` config file in your working directory

```bash
yarn add prettier --dev
```

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": false,
  "trailingComma": "all"
}
```

### jest support

If you want to use `Jest` to test your files, you should firstly install **jest**, then just put a `jest.config.js` config file in your working directory

```bash
yarn add jest --dev
```

```javascript
module.exports = {
  testMatch: ["<rootDir>/__tests__/**/*.js?(x)", "<rootDir>/**/*.(spec|test).js?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/__tests__/(.+/)?data/", "/__tests__/(.+/)?utils/"],
  moduleNameMapper: {},
  collectCoverage: true,
};
```

### MIT License
