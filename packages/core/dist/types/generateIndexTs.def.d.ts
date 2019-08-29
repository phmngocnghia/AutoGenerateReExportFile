export interface GenerateIndexTsParams {
    destinationPath: string;
    inputDirectoryNames: string[];
    inputFileNames: string[];
    fileExts: string[];
    generateFileExt: string;
    ignoreDestinationPaths: RegExp[];
    babelConfigPath?: string;
    stripFileExts?: string[];
}
