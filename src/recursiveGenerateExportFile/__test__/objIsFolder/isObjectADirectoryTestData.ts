import { IsObjectADirectoryTestCase } from "@types";
import * as path from "path";

export const testCases: IsObjectADirectoryTestCase[] = [
  {
    input: {
      obj: "directory",
      directory: path.resolve(__dirname, "./isObjectADirectoryTestDirectory")
    },
    output: true,
    name: "Return true if obj is not directory type"
  },
  {
    input: {
      obj: "file.js",
      directory: path.resolve(__dirname, "./isObjectADirectoryTestDirectory")
    },
    output: false,
    name: "Return true if obj is not directory type"
  }
];
