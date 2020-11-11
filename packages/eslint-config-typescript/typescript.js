const path = require("path");
const fs = require("fs");

const cwd = process.cwd();

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: fs.existsSync(path.resolve(cwd, "./tsconfig.eslint.json"))
      ? "tsconfig.eslint.json"
      : "tsconfig.json",
    tsconfigRootDir: path.resolve(process.cwd(), "./"),
    extraFileExtensions: [],
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};
