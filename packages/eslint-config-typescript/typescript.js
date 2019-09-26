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
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  settings: {
    "import/extensions": [".js", ".ts"],
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
