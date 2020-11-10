module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ["@babel", "prettier"],
  extends: ["airbnb-base", "prettier"],
  rules: {
    "no-console": "off",
    "prettier/prettier": "error",
  },
};
