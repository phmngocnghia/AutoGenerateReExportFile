import { generateExportFile } from "@autogen-export/core";
import { getRegenerateExportFileDirectoryPath } from "../utils/getRegenerateExportFileDirectoryPath";
import { RecursiveGenerateReexportIndex } from "@autogen-export/core/dist/types/recursiveGenerateReexportIndex.def";

export const watchDirHandler = ({
  path,
  generateExportFileParams
}: {
  path: string;
  generateExportFileParams: RecursiveGenerateReexportIndex;
}) => {
  const {
    rootDirectory,
    fileExts,
    stripFileExts,
    generatedFileExt,
    babelConfigPath,
    ignoreDestinationRegexs
  } = generateExportFileParams;

  const generateIndexPaths = getRegenerateExportFileDirectoryPath({
    rootDirectoryPath: rootDirectory,
    directoryPathOfFileChange: path
  });

  for (let path of generateIndexPaths) {
    generateExportFile({
      rootDirectory: path,
      ignoreDestinationRegexs,
      fileExts,
      stripFileExts,
      generatedFileExt,
      babelConfigPath
    });
  }

  console.log(
    `Detect file changed at ${path}. Proceed to re-generate index file`
  );
};
