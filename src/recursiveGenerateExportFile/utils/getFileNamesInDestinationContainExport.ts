import { isFileContainExport } from "./isFileContainExport";

export const getFileNamesInDestinationContainExport = ({
  fileNames,
  destinationPath
}: {
  fileNames: string[];
  destinationPath: string;
}): Promise<string[]> =>
  new Promise(async resolve => {
    const fileNamePromiseObjects = fileNames.map(fileName => ({
      fileName,
      promiseCheckIfFileContainExport: isFileContainExport({
        fileName,
        destinationPath
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

    resolve(fileNamesOfFileConrainExport);
  });
