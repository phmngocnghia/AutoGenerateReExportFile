import { recursiveTravelDirectory } from "./utils/recursiveTravelDirectory";
import { generateIndexTs } from "./utils/generateIndexTs";
import { RecursiveGenerateReexportIndex } from "../types";

export const recursiveGenerateExportFile = ({
  rootDirectory,
  ignoreDestinationRegexs = [],
  generatedFileExt = "js",
  fileExts = ["ts", "tsx", "js", "jsx"],
  babelConfigPath,
  stripFileExts = fileExts
}: RecursiveGenerateReexportIndex) => {
  return recursiveTravelDirectory({
    rootDirectory,
    travelCallBack: ({ directory, childFiles, childDirectories }) => {
      generateIndexTs({
        inputFileNames: childFiles.filter(
          childFild => !/index\..+$/g.test(childFild)
        ),
        inputDirectoryNames: childDirectories,
        destinationPath: directory,
        fileExts,
        ignoreDestinationRegexs,
        babelConfigPath,
        stripFileExts,
        generatedFileExt
      });
    }
  });
};
