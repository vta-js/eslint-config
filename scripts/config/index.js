const path = require("path");

const cwd = process.cwd();

module.exports = {
  copiedFilesPath: path.resolve(cwd, "./.cache/copied-files.json"),
  packages: ["eslint-config", "eslint-config-typescript", "eslint-config-react"],
  filesCopyToPackages: [".npmignore", "LICENSE"],
};
