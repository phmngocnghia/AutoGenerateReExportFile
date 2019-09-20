import { RecursiveGenerateReexportIndex } from "../types";
export declare const generateExportFile: ({
  rootDirectory,
  ignoreDestinationRegexs,
  generatedFileExt,
  fileExts,
  babelConfigPath,
  stripFileExts
}: RecursiveGenerateReexportIndex) => Promise<unknown>;
