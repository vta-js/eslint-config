module.exports = {
  root: true,
  parserOptions: {
    babelOptions: {
      configFile: require.resolve("./babel.config.js"),
    },
  },
  extends: ["../index"],
  rules: {
    "import/prefer-default-export": "off",
  },
};
