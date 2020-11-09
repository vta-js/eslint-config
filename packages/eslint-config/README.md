# @vta/eslint-config

![npm](https://img.shields.io/npm/v/@vta/eslint-config)

Eslint config for pure `Javascript/Node` project, intergrated with [Airbnb](https://github.com/airbnb/javascript), [Prettier](https://prettier.io/) and [Jest](https://jestjs.io/). we use [@babel/eslint-parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser) to parse the javascript files.

## Install

```bash
yarn add @vta/eslint-config --dev
```

ensure you have installed `eslint@>=7.12.0` `@babel/core@>=7.12.0` `@babel/eslint-plugin@>=7.12.0` `eslint-plugin-jest@>=24.0.0` `eslint-plugin-prettier@>=3.0.0` `jest@>=26.0.0` `prettier@>=2.0.0`

## Usage

```json
{
  "extends": ["@vta/eslint-config"]
}
```

### Babel-parser Options

**@babel/eslint-parser** requires **@babel/core@>=7.2.0** and a valid Babel configuration file to run. If you do need to run without a configuration file, you can set `requireConfigFile` to **false** like below. another options you can [view detail](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser#additional-parser-configuration)

```json
{
  "parserOptions": {
    "requireConfigFile": false
  },
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
