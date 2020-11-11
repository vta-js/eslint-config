module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["plugin:vue/recommended", "prettier/vue"],
  rules: {
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
