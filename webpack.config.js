var path = require("path");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "production",
  target: "node",
  entry: path.resolve(__dirname, "./src/codegen"),
  output: {
    path: path.resolve(process.cwd(), "./dist/"),
    filename: "codegen.js"
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
    // import without filename
    extensions: [".js", ".ts", ".tsx"],

    // auto resolve config from typescript
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "./tsconfig.json")
      })
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, "./tsconfig.json")
    })
  ]
};
