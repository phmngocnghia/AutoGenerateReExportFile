import * as path from "path";

export const createIndexTsFileContent = (fileNamesAndDirectoryNames: string[]):string => {
  let fileContent = "";

  fileNamesAndDirectoryNames.forEach((fileNameAndDirectoryName, index) => {
    const fileNameAndDirectoryNameStripExt = path.parse(fileNameAndDirectoryName).name;
    fileContent += `export * from './${fileNameAndDirectoryNameStripExt}'`;

    if (index !== fileNamesAndDirectoryNames.length - 1) {
      fileContent += "\n";
    }
  });

  return fileContent;
};
