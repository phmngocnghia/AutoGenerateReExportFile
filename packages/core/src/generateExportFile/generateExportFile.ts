import { travelDirectory } from "./utils/travelDirectory";
import { generateIndexTs } from "./utils/generateIndexTs";
import { RecursiveGenerateReexportIndex } from "../types";

export const generateExportFile = ({
  rootDirectory,
  ignoreDestinationRegexs,
  generatedFileExt = "js",
  fileExts = ["ts", "tsx", "js", "jsx"],
  babelConfigPath,
  stripFileExts = fileExts
}: RecursiveGenerateReexportIndex) => {
  return travelDirectory({
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
