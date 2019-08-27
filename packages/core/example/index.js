const path = require("path");

const { recursiveGenerateExportFile } = require("../dist");

recursiveGenerateExportFile({
  rootDirectory: path.resolve(__dirname, "./target"),
  fileExts: ["ts"],
  generateFileExt: "ts",
  ignoreDestinationPaths: []
});