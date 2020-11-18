const singleSpaAngularWebpack = require("single-spa-angular/lib/webpack")
  .default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  const extendSingleSpaWebpackConfig = {
    ...singleSpaWebpackConfig,
    output: {
      ...singleSpaWebpackConfig.output,
      filename: "[name].js",
      library: "first",
      libraryTarget: "window",
    },
  };

  // Feel free to modify this webpack config however you'd like to
  return extendSingleSpaWebpackConfig;
};
