import { resolve } from "path";

export const getRegenerateExportFileDirectoryPath = ({
  rootDirectoryPath,
  directoryPathOfFileChange
}: {
  rootDirectoryPath: string;
  directoryPathOfFileChange: string;
}) => {
  let directoryPathOfFileChangeBackward = directoryPathOfFileChange;
  const result = [directoryPathOfFileChangeBackward];

  if (directoryPathOfFileChange === rootDirectoryPath) {
    return result;
  }

  while (
    (directoryPathOfFileChangeBackward = resolve(
      directoryPathOfFileChangeBackward,
      "../"
    )) !== rootDirectoryPath
  ) {
    result.push(directoryPathOfFileChangeBackward);
  }

  return result;
};
