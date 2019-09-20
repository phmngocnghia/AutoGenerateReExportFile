import { RecursiveGenerateReexportIndex } from "../types";
export declare const recursiveGenerateExportFile: ({
  rootDirectory,
  ignoreDestinationRegexs,
  generatedFileExt,
  fileExts,
  babelConfigPath,
  stripFileExts
}: RecursiveGenerateReexportIndex) => Promise<unknown>;
