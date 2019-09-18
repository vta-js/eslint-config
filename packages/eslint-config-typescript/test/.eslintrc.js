const config = require("../index");

module.exports = {
  root: true,
  extends: ["../index"],
  parserOptions: {
    ...config.parserOptions,
    project: "packages/eslint-config-typescript/test/tsconfig.eslint.json",
  },
};
