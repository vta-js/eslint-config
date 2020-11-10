/* eslint-disable no-param-reassign */

module.exports = function registExtensions(extensions, config) {
  if (!config.settings) {
    config.settings = {};
  }
  config.settings["import/extensions"] = extensions.map((ext) => `.${ext}`);
  config.settings["import/resolver"] = {
    node: {
      extensions: extensions.map((ext) => `.${ext}`),
    },
  };

  if (!config.rules) {
    config.rules = {};
  }
  config.rules["import/extensions"] = [
    "error",
    extensions.reduce(
      (options, ext) => {
        options[ext] = "never";
        return options;
      },
      { json: "always" },
    ),
  ];

  return config;
};
