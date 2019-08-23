import * as path from "path";
import { isFileContainExport } from "./isFileContainExport";

export const isFolderContainExport = async ({
  folderName,
  destinationPath,
  indexFileExt
}: {
  folderName: string;
  destinationPath: string;
  indexFileExt: string;
}): Promise<string | null> => {
  try {
    // check if file is parsable
    if (
      await isFileContainExport({
        destinationPath: path.join(destinationPath, folderName),
        fileName: `index.${indexFileExt}`
      })
    ) {
      return folderName;
    }

    return null;
  } catch (err) {
    return null;
  }
};
