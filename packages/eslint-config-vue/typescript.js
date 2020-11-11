const registExtensions = require("@vta/eslint-config/registExtensions");

module.exports = registExtensions(["js", "vue", "ts", "tsx"], {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
  },
  extends: ["./index", "@vta/eslint-config-typescript/typescript"],
  rules: {},
});
