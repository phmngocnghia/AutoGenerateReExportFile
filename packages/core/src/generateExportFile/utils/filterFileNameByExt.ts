import * as path from "path";
import { FilterFileNameByExt } from "@types";

export const filterFileNameByExt = ({
  fileNames,
  fileExts
}: FilterFileNameByExt) => {
  const fileNamesMatchExt = fileNames.filter(fileName => {
    const string = path
      .extname(fileName)
      .split(".")
      .pop();

    return fileExts.includes(string);
  });

  return fileNamesMatchExt;
};
