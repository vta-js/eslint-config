module.exports = {
  plugins: ["jest", "prettier"],
  extends: ["airbnb-base", "plugin:jest/recommended", "plugin:prettier/recommended"],
  settings: {
    "import/extensions": [".js"],
    "import/resolver": {
      node: {
        extensions: [".js"],
      },
    },
  },
  rules: {
    "no-console": "off",
  },
};
