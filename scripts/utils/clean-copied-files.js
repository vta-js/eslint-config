const path = require("path");
const fse = require("fs-extra");
const config = require("../config");

const cwd = process.cwd();

/* eslint-disable import/no-dynamic-require */
const copiedFiles = Object.keys(require(config.copiedFilesPath));

module.exports = function cleanCopiedFiles() {
  return Promise.all(copiedFiles.map(file => fse.remove(path.resolve(cwd, file))));
};
