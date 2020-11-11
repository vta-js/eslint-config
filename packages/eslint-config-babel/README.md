# @vta/eslint-config-babel

![npm](https://img.shields.io/npm/v/@vta/eslint-config-babel)

A superset of [@vta/eslint-config](https://github.com/vta-js/eslint-config/tree/master/packages/eslint-config), add support for **Babel** project, intergrated with [@babel/eslint-parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)

## Install

```bash
yarn add @vta/eslint-config-babel --dev
```

## Usage

```json
{
  "extends": ["@vta/babel"]
}
```

### Babel-parser Options

**@babel/eslint-parser** requires **@babel/core@>=7.2.0** and a valid Babel configuration file to run. If you do need to run without a configuration file, you can set `requireConfigFile` to **false** like below. another options you can [view detail](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser#additional-parser-configuration)

```json
{
  "parserOptions": {
    "requireConfigFile": false
  },
  "extends": ["@vta/babel"]
}
```

### MIT License
