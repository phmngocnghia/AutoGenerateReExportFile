import { RecursiveGenerateReexportIndex } from "@types";
import { recursiveTravelDirectory } from "./utils/recursiveTravelDirectory";
import { generateIndexTs } from "./utils/generateIndexTs";

export const recursiveGenerateExportFile = ({
  rootDirectory,
  fileExts,
  generatedFileExt,
  ignoreDestinationPaths
}: RecursiveGenerateReexportIndex) => {
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
    },
    ignoreDestinationPaths
  });
};
