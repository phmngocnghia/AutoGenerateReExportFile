// import { RecursiveGenerateReexportIndex } from "@types";
import { recursiveTravelDirectory } from "./utils/recursiveTravelDirectory";
import { generateIndexTs } from "./utils/generateIndexTs";

interface RecursiveGenerateReexportIndex {
  rootDirectory: string;
  fileExts: string[];
  generatedFileExt: string;
  ignoreDestinationPaths?: RegExp[];
}

export const recursiveGenerateExportFile = ({
  rootDirectory,
  fileExts,
  generatedFileExt,
  ignoreDestinationPaths
}) => {
  return recursiveTravelDirectory({
    rootDirectory,
    travelCallBack: ({ directory, childFiles, childDirectories }) => {
      generateIndexTs({
        inputFileNames: childFiles,
        inputDirectoryNames: childDirectories,
        destinationPath: directory,
        generatedFileExt,
        fileExts,
        ignoreDestinationPaths
      });
    }
  });
};
