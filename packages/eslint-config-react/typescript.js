module.exports = {
  extends: ["./index", "@vta/eslint-config-typescript/typescript"],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: ["jsx", "tsx"] }],
  },
};
