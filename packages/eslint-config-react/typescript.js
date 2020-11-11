const registExtensions = require("@vta/eslint-config/registExtensions");

module.exports = registExtensions(["js", "jsx", "ts", "tsx"], {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["./react"],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: ["jsx", "tsx"] }],
  },
});
