const tsconfig = require("@vta/eslint-config-typescript"); // eslint-disable-line
const config = require("./index");

module.exports = {
  ...tsconfig,
  parserOptions: {
    ...tsconfig.parserOptions,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-hooks"].concat(tsconfig.plugins),
  extends: config.extends.concat(
    tsconfig.extends.filter(extend => extend !== "@vta/eslint-config"),
  ),
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    ...(tsconfig.rules || {}),
    ...(config.rules || {}),
    "react/jsx-filename-extension": ["error", { extensions: ["jsx", "tsx"] }],
  },
};
