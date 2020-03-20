module.exports = {
  plugins: [
    [
      "@vta/monorepo",
      {
        filesToCopy: [".npmignore", "LICENSE"],
        release: "github",
      },
    ],
  ],
};
