module.exports = {
  plugins: ["react-hooks"],
  extends: ["airbnb/rules/react", "airbnb/rules/react-a11y", "prettier/react"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-filename-extension": ["error", { extensions: ["jsx"] }],
  },
};
