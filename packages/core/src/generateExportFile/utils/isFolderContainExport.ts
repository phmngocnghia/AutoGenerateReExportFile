import * as path from "path";
import { isFileContainExport } from "./isFileContainExport";

export const isFolderContainExport = async ({
  folderName,
  destinationPath,
  indexstring
}: {
  folderName: string;
  destinationPath: string;
  indexstring: string;
  babelConfigPath?: string;
}): Promise<string | null> => {
  try {
    // check if file is parsable
    if (
      await isFileContainExport({
        destinationPath: path.join(destinationPath, folderName),
        fileName: `index.${indexstring}`
      })
    ) {
      return folderName;
    }

    return null;
  } catch (err) {
    return null;
  }
};
