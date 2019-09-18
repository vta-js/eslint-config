const config = require("../../typescript");

module.exports = {
  root: true,
  extends: ["../../typescript"],
  parserOptions: {
    ...config.parserOptions,
    project: undefined,
  },
};
