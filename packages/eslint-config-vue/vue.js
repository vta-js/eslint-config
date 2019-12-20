module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["plugin:vue/recommended", "prettier/vue"],
  settings: {
    "import/extensions": [".js", ".vue"],
    "import/resolver": {
      node: {
        extensions: [".js", ".vue"],
      },
    },
  },
  rules: {
    "import/extensions": ["error", { js: "never", vue: "never", json: "always" }],
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
