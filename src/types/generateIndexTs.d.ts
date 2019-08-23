export interface GenerateIndexTsParams {
  destinationPath: string;
  inputDirectoryNames: string[];
  inputFileNames: string[];
  fileExts: string[];
  generatedFileExt: string;
  ignoreDestinationPaths: RegExp[];
}
