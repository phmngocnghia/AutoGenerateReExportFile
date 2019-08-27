import { isFileContainExport } from "./isFileContainExport";

export const getFileNamesInDestinationContainExport = async ({
  fileNames,
  destinationPath,
  babelConfigPath
}: {
  fileNames: string[];
  destinationPath: string;
  babelConfigPath?: string;
}): Promise<string[]> => {
  const fileNamePromiseObjects = fileNames.map(fileName => ({
    fileName,
    promiseCheckIfFileContainExport: isFileContainExport({
      fileName,
      destinationPath,
      babelConfigPath
    }).then(value => {
      return value;
    })
  }));

  // wait until all file in destination has been checked
  const promises = fileNamePromiseObjects.map(
    ({ promiseCheckIfFileContainExport }) => promiseCheckIfFileContainExport
  );
  const fileNamesReturnedByPromise = await Promise.all(promises);

  // fileNamesOfFileContainExport
  const fileNamesOfFileConrainExport = fileNamesReturnedByPromise.filter(
    x => typeof x == "string"
  );

  return fileNamesOfFileConrainExport;
};
