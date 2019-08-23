import * as fs from "fs";
import * as path from "path";

import { IsObjectADirectoryTestInput } from "@types";

/**
 * return true if obj is a directory
 * return false if obj is not a directory
 * throw error if obj is exist
 */
export function isObjectADirectory({
  directory,
  obj
}: IsObjectADirectoryTestInput) {
  const objPath = path.join(directory, obj);
  const objStat = fs.statSync(objPath);
  return objStat.isDirectory();
}
