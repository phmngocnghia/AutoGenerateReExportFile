import { resolve, isAbsolute } from "path";

export const getRegenerateExportFileDirectoryPath = ({
  rootDirectoryPath,
  directoryPathOfFileChange
}: {
  rootDirectoryPath: string;
  directoryPathOfFileChange: string;
}) => {
  const absoluteDirectoryPath = isAbsolute(rootDirectoryPath)
    ? rootDirectoryPath
    : resolve(process.cwd(), rootDirectoryPath);

  let directoryPathOfFileChangeBackward = directoryPathOfFileChange;
  const result = [directoryPathOfFileChangeBackward];

  if (directoryPathOfFileChange === rootDirectoryPath) {
    return result;
  }

  // infinity loop detector
  const set = new Set();
  while (
    (directoryPathOfFileChangeBackward = resolve(
      directoryPathOfFileChangeBackward,
      "../"
    )) !== absoluteDirectoryPath
  ) {
    if (set.has(directoryPathOfFileChangeBackward)) {
      console.error(
        "Something is wrong. Please report back to the owner of the package"
      );
      console.error({
        directoryPathOfFileChangeBackward,
        directoryPathOfFileChange,
        set: JSON.stringify([...set]),
        absoluteDirectoryPath
      });
      return [];
    }

    set.add(directoryPathOfFileChangeBackward);
    result.push(directoryPathOfFileChangeBackward);
  }

  return result;
};
