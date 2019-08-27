var path = require("path");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
var TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
var nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  mode: "development",
  entry: path.resolve(__dirname, "./src/recursiveGenerateExportFile"),
  output: {
    path: path.resolve(process.cwd(), "./dist/"),
    filename: "index.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
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
    // new ForkTsCheckerWebpackPlugin({
    //   tsconfig: path.resolve(__dirname, "./tsconfig.json")
    // })
  ],
  externals: [nodeExternals()]
};
