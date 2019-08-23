var path = require("path");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "../src/index"),
  output: {
    path: path.resolve(process.cwd(), "./public/"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        // Typescript
        test: /\.tsx?$/,
        // shortcut use[{loader}]
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    // since our webpack config store not in the same folde as node module
    modules: [path.resolve(__dirname, "../node_modules")],

    // import without filename
    extensions: [".js", ".ts", ".tsx"],

    // auto resolve config from typescript
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json")
      })
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, "../tsconfig.json")
    })
  ]
};
