export interface RecursiveGenerateReexportIndex {
    rootDirectory: string;
    fileExts?: string[];
    stripFileExts?: string[];
    generateFileExt?: string;
    ignoreDestinationPaths?: RegExp[];
    babelConfigPath?: string;
}
