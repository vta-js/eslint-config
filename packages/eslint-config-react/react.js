module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-hooks"],
  extends: ["airbnb/rules/react", "airbnb/rules/react-a11y", "prettier/react"],
  settings: {
    "import/extensions": [".js", ".jsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
  rules: {
    "import/extensions": ["error", { js: "never", jsx: "never", json: "always" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
};
