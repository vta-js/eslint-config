const registExtensions = require("@vta/eslint-config/registExtensions");

module.exports = registExtensions(["js", "ts"], {
  extends: ["@vta", "./typescript"],
});
