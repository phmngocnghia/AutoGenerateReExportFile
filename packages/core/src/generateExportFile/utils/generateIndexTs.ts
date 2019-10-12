import * as fs from "fs";
import * as path from "path";

import { GenerateIndexTsParams } from "@types";
import { filterFileNameByExt } from "./filterFileNameByExt";
import { createIndexTsFileContent } from "./createIndexTsFileContent";
import { getFileNamesInDestinationContainExport } from "./getFileNamesInDestinationContainExport";
import { getFolderNamesInDestinationContainExport } from "./getFolderNamesInDestinationContainExport";

export const generateIndexTs = async ({
  fileExts,
  stripFileExts,
  inputDirectoryNames,
  inputFileNames,
  generatedFileExt,
  destinationPath,
  ignoreDestinationRegexs,
  babelConfigPath,
  ignoreMatchFileRegexes = []
}: GenerateIndexTsParams) => {
  // Ignore destination match destinations
  if (
    ignoreDestinationRegexs.some(ignoreDestinationPath =>
      ignoreDestinationPath.test(destinationPath)
    )
  ) {
    return;
  }

  // ignore input directory name and file names match ignoreMatchFileRegexes
  const filteredInputDirectoryNames = inputDirectoryNames.filter(
    inputDirectoryName => {
      for (let ignoreMatchFileRegex of ignoreMatchFileRegexes) {
        if (ignoreMatchFileRegex.test(inputDirectoryName)) {
          return false;
        }
      }

      return true;
    }
  );
  const filteredInputFileNames = inputFileNames.filter(inputDirectoryName => {
    for (let ignoreMatchFileRegex of ignoreMatchFileRegexes) {
      if (ignoreMatchFileRegex.test(inputDirectoryName)) {
        return false;
      }
    }

    return true;
  });

  const fileNamesMatchExt = filterFileNameByExt({
    fileNames: filteredInputFileNames,
    fileExts
  });

  const [fileNames, folderNames] = await Promise.all([
    getFileNamesInDestinationContainExport({
      fileNames: fileNamesMatchExt,
      destinationPath,
      babelConfigPath
    }),
    getFolderNamesInDestinationContainExport({
      folderNames: filteredInputDirectoryNames,
      destinationPath,
      indexstring: generatedFileExt
    })
  ]);

  // create file content
  const fileContent = createIndexTsFileContent({
    fileNames,
    folderNames,
    stripFileExts
  });

  if (!fileContent) {
    return;
  }

  // Print generated file name with success color
  const indexFilePath = path.join(destinationPath, `index.${generatedFileExt}`);
  console.log(`Generate ${indexFilePath}`);

  // create index file
  return fs.writeFileSync(indexFilePath, fileContent);
};
