export interface RecursiveGenerateReexportIndex {
  rootDirectory: string;
  fileExts?: string[];
  stripFileExts?: string[];
  generatedFileExt?: string;
  ignoreDestinationRegexs?: RegExp[];
  babelConfigPath?: string;
  ignoreMatchFileRegexes?: RegExp[];
}
