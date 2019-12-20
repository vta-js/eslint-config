module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: ["babel", "jest", "prettier"],
  extends: ["airbnb-base", "plugin:jest/recommended", "plugin:prettier/recommended"],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  settings: {
    "import/extensions": [".js"],
    "import/resolver": {
      node: {
        extensions: [".js"],
      },
    },
  },
  rules: {
    "import/extensions": ["error", { js: "never", json: "always" }],
    "no-console": "off",
  },
};
