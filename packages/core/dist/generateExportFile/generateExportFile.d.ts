import { RecursiveGenerateReexportIndex } from "@types";
export declare const generateExportFile: ({
  rootDirectory,
  ignoreDestinationPaths,
  generateFileExt,
  fileExts,
  babelConfigPath,
  stripFileExts
}: RecursiveGenerateReexportIndex) => Promise<{}>;
