const registExtensions = require("@vta/eslint-config/registExtensions");

module.exports = registExtensions(["js", "jsx"], {
  extends: ["./react"],
});
