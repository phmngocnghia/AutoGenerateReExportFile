export interface RecursiveGenerateReexportIndex {
  rootDirectory: string;
  fileExts: string[];
  generatedFileExt: string;
  ignoreDestinationPaths: RegExp[];
}
