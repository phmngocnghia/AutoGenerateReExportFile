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
  generateFileExt,
  destinationPath,
  ignoreDestinationPaths,
  babelConfigPath
}: GenerateIndexTsParams) => {
  // Ignore destination match destinations
  if (
    ignoreDestinationPaths.some(ignoreDestinationPath =>
      ignoreDestinationPath.test(destinationPath)
    )
  ) {
    return;
  }

  const fileNamesMatchExt = filterFileNameByExt({
    fileNames: inputFileNames,
    fileExts
  });

  const [fileNames, folderNames] = await Promise.all([
    getFileNamesInDestinationContainExport({
      fileNames: fileNamesMatchExt,
      destinationPath,
      babelConfigPath
    }),
    getFolderNamesInDestinationContainExport({
      folderNames: inputDirectoryNames,
      destinationPath,
      indexstring: generateFileExt
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
  const indexFilePath = path.join(destinationPath, `index.${generateFileExt}`);
  console.log(`Generate ${indexFilePath}`);

  // create index file
  return fs.writeFileSync(indexFilePath, fileContent);
};
