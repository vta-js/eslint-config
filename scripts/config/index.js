const path = require("path");

const cwd = process.cwd();

module.exports = {
  copiedFilesPath: path.resolve(cwd, "./.cache/copied-files.json"),
  packages: ["config", "config-typescript"],
  filesCopyToPackages: [".npmignore", "LICENSE"],
};
