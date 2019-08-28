import { IsObjectADirectoryTestInput } from "@types";
/**
 * return true if obj is a directory
 * return false if obj is not a directory
 * throw error if obj is exist
 */
export declare function isObjectADirectory({
  directory,
  obj
}: IsObjectADirectoryTestInput): boolean;
