// const a = require("/Users/phmngocnghia/Desktop/AutoGenerateReExport/node_modules/@babel/preset-typescriptslib/index.js");
const path = require("path");
// const recursiveGenerateExportFile = require("../dist/codegen.js");
// console.log(recursiveGenerateExportFile);
const { recursiveGenerateExportFile } = require("../dist");

recursiveGenerateExportFile({
  rootDirectory: path.resolve(__dirname, "./target"),
  fileExts: ["ts"],
  generateFileExt: "ts",
  ignoreDestinationPaths: []
});
