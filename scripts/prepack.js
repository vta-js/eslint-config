const config = require("./config");
const { copyFilesToPackages, saveCopiedFiles } = require("./utils/copy-files-to-packages");

Promise.all([copyFilesToPackages(config.packages, config.filesCopyToPackages)]).then(() => {
  saveCopiedFiles();
});
