import * as fs from "fs";
import * as path from "path";

import { GenerateIndexTsParams } from "@types";
import { filterFileNameByExt } from "./filterFileNameByExt";
import { createIndexTsFileContent } from "./createIndexTsFileContent";
import { getFileNamesInDestinationContainExport } from "./getFileNamesInDestinationContainExport";
import { getFolderNamesInDestinationContainExport } from "./getFolderNamesInDestinationContainExport";

export const generateIndexTs = async ({
  fileExts,
  inputDirectoryNames,
  inputFileNames,
  generatedFileExt,
  destinationPath,
  ignoreDestinationPaths
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

  const [fileNames, directoryNames] = await Promise.all([
    getFileNamesInDestinationContainExport({
      fileNames: fileNamesMatchExt,
      destinationPath
    }),
    getFolderNamesInDestinationContainExport({
      folderNames: inputDirectoryNames,
      destinationPath,
      indexFileExt: generatedFileExt
    })
  ]);

  // create file content
  const fileContent = createIndexTsFileContent([
    ...fileNames,
    ...directoryNames
  ]);

  if (!fileContent) {
    return;
  }

  // create index file
  return fs.writeFileSync(
    path.join(destinationPath, `index.${generatedFileExt}`),
    fileContent
  );
};
