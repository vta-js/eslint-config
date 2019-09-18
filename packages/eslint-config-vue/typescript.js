const tsconfig = require("@vta/eslint-config-typescript/index"); // eslint-disable-line

module.exports = {
  ...tsconfig,
  parser: "vue-eslint-parser",
  parserOptions: {
    ...tsconfig.parserOptions,
    // blocked by https://github.com/typescript-eslint/typescript-eslint/issues/890
    project: undefined,
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: [".vue"],
  },
  extends: tsconfig.extends.concat(["plugin:vue/recommended", "prettier/vue"]),
  settings: {
    "import/extensions": [".js", ".ts", ".vue"],
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".vue"],
      },
    },
  },
  rules: {
    ...(tsconfig.rules || {}),
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any",
        },
      },
    ],
  },
};
