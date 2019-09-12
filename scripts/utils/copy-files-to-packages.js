const path = require("path");
const fse = require("fs-extra");
const config = require("../config");

const cwd = process.cwd();

function fileExists(dest) {
  return new Promise(resolve => {
    fse.exists(dest, resolve);
  });
}

const copiedFiles = {};
module.exports = {
  copyFilesToPackages(pkgs, files) {
    return Promise.all(
      pkgs.map(pkg =>
        Promise.all(
          files.map(file => {
            const dest = path.resolve(cwd, `./packages/${pkg}/${file}`);
            return fileExists(dest).then(exists => {
              if (!exists) {
                copiedFiles[`./packages/${pkg}/${file}`] = true;
                return fse.copyFile(path.resolve(cwd, file), dest);
              }
              return undefined;
            });
          }),
        ),
      ),
    );
  },
  saveCopiedFiles() {
    return fse.ensureFile(config.copiedFilesPath).then(() =>
      fse.writeFile(config.copiedFilesPath, JSON.stringify(copiedFiles, null, 2), {
        encoding: "utf8",
      }),
    );
  },
};
