import { readFileSync } from "fs";
import { resolve } from "path";

export const parseConfigFile = () => {
  const parseCfgPath = resolve(process.cwd(), "@auto-export.json");

  const fileBuffer = readFileSync(parseCfgPath);
  const fileContent = fileBuffer.toString();
  const parsedFileContent = JSON.parse(fileContent);

  const keys = [
    "rootDirectory",
    "stripFileExts",
    "fileExts",
    "ignoreDestinationRegexs",
    "babelConfigPath",
    "generatedFileExt"
  ];

  for (let key of keys) {
    if (
      typeof parsedFileContent[key] !== "string" &&
      typeof parsedFileContent[key] !== "undefined"
    ) {
      throw new Error(
        "Invalid config file: data type must be either undefined or string"
      );
    }
  }

  const {
    rootDirectory,
    stripFileExts = "ts,tsx,js,jsx",
    fileExts = "ts,tsx,js,jsx",
    ignoreDestinationRegexs,
    babelConfigPath,
    generatedFileExt = "ts"
  } = parsedFileContent;

  if (!rootDirectory) {
    throw new Error(
      "Invalid config file: Root directory parameter is required"
    );
  }

  return {
    rootDirectory,
    stripFileExts,
    fileExts,
    ignoreDestinationRegexs,
    babelConfigPath,
    generatedFileExt
  };
};
