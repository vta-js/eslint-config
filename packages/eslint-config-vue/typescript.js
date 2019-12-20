module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    // blocked by https://github.com/typescript-eslint/typescript-eslint/issues/890
    project: null,
    extraFileExtensions: [".vue"],
  },
  extends: ["./index", "@vta/eslint-config-typescript/typescript"],
  settings: {
    "import/extensions": [".js", ".ts", ".vue"],
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".vue"],
      },
    },
  },
  rules: {
    "import/extensions": ["error", { js: "never", ts: "never", vue: "never", json: "always" }],
  },
};
