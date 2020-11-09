module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ["@babel", "jest", "prettier"],
  extends: ["airbnb-base", "plugin:jest/recommended", "prettier"],
  rules: {
    "no-console": "off",
    "prettier/prettier": "error",
  },
};
