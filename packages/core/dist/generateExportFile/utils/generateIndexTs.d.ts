import { GenerateIndexTsParams } from "@types";
export declare const generateIndexTs: ({ fileExts, stripFileExts, inputDirectoryNames, inputFileNames, generatedFileExt, destinationPath, ignoreDestinationRegexs, babelConfigPath, ignoreMatchFileRegexes }: GenerateIndexTsParams) => Promise<void>;
