const config = require("../../typescript");

module.exports = {
  root: true,
  extends: ["../../typescript"],
  parserOptions: {
    ...config.parserOptions,
    project: "packages/eslint-config-react/test/tsx/tsconfig.eslint.json",
  },
};
