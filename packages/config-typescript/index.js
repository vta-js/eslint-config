const path = require("path");
const fs = require("fs");
const config = require("@vta/eslint-config/index");

const cwd = process.cwd();

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: fs.existsSync(path.resolve(cwd, "./tsconfig.eslint.json"))
      ? path.resolve(cwd, "./tsconfig.eslint.json")
      : path.resolve(cwd, "./tsconfig.json"),
    tsconfigRootDir: path.resolve(process.cwd(), "./"),
    extraFileExtensions: [],
  },
  plugins: ["@typescript-eslint"].concat(config.plugins),
  extends: [
    "@vta/eslint-config",
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
