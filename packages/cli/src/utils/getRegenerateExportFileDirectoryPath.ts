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

  while (
    (directoryPathOfFileChangeBackward = resolve(
      directoryPathOfFileChangeBackward,
      "../"
    )) !== absoluteDirectoryPath
  ) {
    result.push(directoryPathOfFileChangeBackward);
  }

  return result;
};
