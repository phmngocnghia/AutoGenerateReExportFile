import AutoGenExportCommand from "../../../index";

jest.mock("@autogen-export/core", () => {
  return {
    recursiveGenerateExportFile: jest.fn(),
    generateExportFile: jest.fn()
  };
});

import {
  recursiveGenerateExportFile,
  generateExportFile
} from "@autogen-export/core";

import { RecursiveGenerateReexportIndex } from "@autogen-export/core/dist/types/recursiveGenerateReexportIndex";

describe("Auto Gen Export Command - config file", () => {
  describe("called recursive generate directory correct", () => {
    const generateExportFileDefaultInput: RecursiveGenerateReexportIndex = {
      stripFileExts: ["ts", "tsx", "js"],
      fileExts: ["ts"],
      rootDirectory: "./example/",
      babelConfigPath: "./src/__test__/.babelrc",
      generatedFileExt: "ts",
      ignoreDestinationRegexs: []
    };

    it("called recursive generate directory correct", async () => {
      await AutoGenExportCommand.run(["-c", "-r"]);
      expect(recursiveGenerateExportFile).toBeCalledTimes(1);
      expect(recursiveGenerateExportFile).toHaveBeenLastCalledWith(
        generateExportFileDefaultInput
      );
    });
  });

  describe("called generate directory correct", () => {
    const generateExportFileDefaultInput: RecursiveGenerateReexportIndex = {
      stripFileExts: ["ts", "tsx", "js"],
      fileExts: ["ts"],
      rootDirectory: "./example/",
      babelConfigPath: "./src/__test__/.babelrc",
      generatedFileExt: "ts",
      ignoreDestinationRegexs: []
    };

    it("called generate directory correct", async () => {
      await AutoGenExportCommand.run(["-c"]);
      expect(generateExportFile).toBeCalledTimes(1);
      expect(generateExportFile).toHaveBeenLastCalledWith(
        generateExportFileDefaultInput
      );
    });
  });

  afterEach(() => {
    (recursiveGenerateExportFile as jest.Mock).mockClear();
    (generateExportFile as jest.Mock).mockClear();
  });
});
