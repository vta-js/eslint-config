const registExtensions = require("@vta/eslint-config/registExtensions");

module.exports = registExtensions(["js", "vue"], {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  extends: ["./vue"],
});
