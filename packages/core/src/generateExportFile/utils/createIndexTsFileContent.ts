import * as path from "path";

export const createIndexTsFileContent = ({
  fileNames,
  folderNames,
  stripFileExts = ["js", "ts"]
}: {
  fileNames: string[];
  folderNames: string[];
  stripFileExts?: string[];
}): string => {
  const transformedFileName = fileNames.map(fileName => {
    const parseFileName = path.parse(fileName);
    const transformedFileExt = parseFileName.ext.substr(
      1,
      parseFileName.ext.length - 1
    );

    if (stripFileExts.includes(transformedFileExt)) {
      return parseFileName.name;
    }
    return fileName;
  });

  const names = [...transformedFileName, ...folderNames];
  const fileContent = names.reduce((fileContent, name, index) => {
    fileContent += `export * from './${name}'`;
    if (index < names.length - 1) {
      fileContent += "\n";
    }

    return fileContent;
  }, "");

  return fileContent;
};
