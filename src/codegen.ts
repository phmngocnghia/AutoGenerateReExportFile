import { recursiveGenerateExportFile } from "./recursiveGenerateExportFile";

import * as path from "path";

recursiveGenerateExportFile({
  rootDirectory: path.resolve(__dirname, "../src"),
  fileExts: ["js", "ts"],
  generatedFileExt: "ts",
  ignoreDestinationPaths: [/store\/index.ts$/]
});
