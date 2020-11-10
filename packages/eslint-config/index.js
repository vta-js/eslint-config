const registExtensions = require("./registExtensions");

module.exports = registExtensions(["js"], {
  parserOptions: {
    ecmaVersion: 2021,
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ["prettier"],
  extends: ["airbnb-base", "prettier"],
  rules: {
    "no-console": "off",
    "prettier/prettier": "error",
  },
});
