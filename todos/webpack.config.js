const { merge } = require("webpack-merge")
const singleSpaDefaults = require("webpack-config-single-spa-react")

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "study",
    projectName: "todos",
    webpackConfigEnv,
    argv
  })

  return merge(defaultConfig, {
    // δΈζε
    externals: ["react-router-dom"]
  })
}
