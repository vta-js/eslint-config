const config = require("@vta/eslint-config/index");

module.exports = {
  ...config,
  extends: config.extends.concat(["plugin:vue/recommended", "prettier/vue"]),
  settings: {
    "import/extensions": [".js", ".vue"],
    "import/resolver": {
      node: {
        extensions: [".js", ".vue"],
      },
    },
  },
  rules: {
    ...(config.rules || {}),
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
