const config = require("@vta/eslint-config/index");

module.exports = {
  plugins: ["react-hooks"].concat(config.plugins),
  extends: config.extends
    .map(extend => (extend === "airbnb-base" ? "airbnb" : extend))
    .concat("prettier/react"),
  settings: {
    "import/extensions": [".js", ".jsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
