# @vta/eslint-config

![npm](https://img.shields.io/npm/v/@vta/eslint-config)

Eslint config for pure `Javascript/Node` project, intergrated with [Airbnb](https://github.com/airbnb/javascript), [Prettier](https://prettier.io/).

## Install

```bash
yarn add @vta/eslint-config --dev
```

## Usage

```json
{
  "extends": ["@vta"]
}
```

### Prettier Support

You should firstly install **prettier**, then just put a `.prettierrc` config file in your working directory

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

### MIT License
