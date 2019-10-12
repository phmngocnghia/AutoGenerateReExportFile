import { RecursiveGenerateReexportIndex } from "../types";
export declare const recursiveGenerateExportFile: ({
  rootDirectory,
  ignoreDestinationRegexs,
  generatedFileExt,
  fileExts,
  babelConfigPath,
  stripFileExts,
  ignoreMatchFileRegexes
}: RecursiveGenerateReexportIndex) => Promise<{}>;
