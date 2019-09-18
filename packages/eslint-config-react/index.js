const config = require("@vta/eslint-config/index");

module.exports = {
  ...config,
  plugins: ["react-hooks"].concat(config.plugins),
  extends: config.extends
    .map(extend => (extend === "airbnb-base" ? "airbnb" : extend))
    .concat(["prettier/react"]),
  settings: {
    "import/extensions": [".js", ".jsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
  rules: {
    ...(config.rules || {}),
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
};
