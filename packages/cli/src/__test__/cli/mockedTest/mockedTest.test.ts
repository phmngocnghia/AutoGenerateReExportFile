import AutoGenExportCommand from "../../../index";
import * as path from "path";

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

describe("Auto Gen Export Command", () => {
  describe("Handle error", () => {
    it("Throw error if root directory path is invalid", async () => {
      try {
        await AutoGenExportCommand.run(["a"]);
      } catch (err) {
        expect(err.message).toBe("Root directory path is invalid");
      }
    });

    it("Throw error if root directory not specify when specify recursive flag = true ", async () => {
      try {
        await AutoGenExportCommand.run(["-r"]);
      } catch (err) {
        expect(err.message).toBe(
          "If not use config file then root directoy must be specify"
        );
      }
    });
  });

  describe("array value", () => {
    const generateExportFileDefaultInput: RecursiveGenerateReexportIndex = {
      stripFileExts: ["vue", "ts"],
      fileExts: ["vue", "ts"],
      rootDirectory: path.resolve(__dirname, "./integration/"),
      babelConfigPath: path.resolve(__dirname, "./.babelrc"),
      generatedFileExt: "js",
      ignoreDestinationRegexs: [/vue/]
    };

    const cliInput = [
      path.resolve(__dirname, "./integration/"),
      path.resolve(__dirname, "./.babelrc"),
      "vue,ts",
      "vue,ts",
      "vue",
      "js"
    ];

    it("called generated export file with proper value", async () => {
      await AutoGenExportCommand.run(cliInput);
      expect(generateExportFile).toBeCalledTimes(1);
      expect(generateExportFile).toHaveBeenLastCalledWith(
        generateExportFileDefaultInput
      );
    });

    it("called recrusive generated export file with proper value", async () => {
      await AutoGenExportCommand.run(["-r", ...cliInput]);
      expect(recursiveGenerateExportFile).toBeCalledTimes(1);
      expect(recursiveGenerateExportFile).toHaveBeenLastCalledWith(
        generateExportFileDefaultInput
      );
    });
  });

  describe("Passed value", () => {
    const generateExportFileDefaultInput: RecursiveGenerateReexportIndex = {
      stripFileExts: ["vue"],
      fileExts: ["vue"],
      rootDirectory: path.resolve(__dirname, "./integration/"),
      babelConfigPath: path.resolve(__dirname, "./.babelrc"),
      generatedFileExt: "js",
      ignoreDestinationRegexs: [/vue/]
    };

    const cliInput = [
      path.resolve(__dirname, "./integration/"),
      path.resolve(__dirname, "./.babelrc"),
      "vue",
      "vue",
      "vue",
      "js"
    ];

    it("called generated export file with proper value", async () => {
      await AutoGenExportCommand.run(cliInput);
      expect(generateExportFile).toBeCalledTimes(1);
      expect(generateExportFile).toHaveBeenLastCalledWith(
        generateExportFileDefaultInput
      );
    });

    it("called recrusive generated export file with proper value", async () => {
      await AutoGenExportCommand.run(["-r", ...cliInput]);
      expect(recursiveGenerateExportFile).toBeCalledTimes(1);
      expect(recursiveGenerateExportFile).toHaveBeenLastCalledWith(
        generateExportFileDefaultInput
      );
    });
  });

  describe("Default value", () => {
    const generateExportFileDefaultInput: RecursiveGenerateReexportIndex = {
      stripFileExts: ["ts", "tsx", "js", "jsx"],
      fileExts: ["ts", "tsx", "js", "jsx"],
      rootDirectory: path.resolve(__dirname, "./integration/"),
      babelConfigPath: undefined,
      generatedFileExt: "ts",
      ignoreDestinationRegexs: []
    };

    it("It's called generate export file with default value", async () => {
      await AutoGenExportCommand.run([
        path.resolve(__dirname, "./integration/")
      ]);
      expect(generateExportFile).toBeCalledTimes(1);
      expect(generateExportFile).toHaveBeenLastCalledWith(
        generateExportFileDefaultInput
      );
    });

    it("It's called recursive generate export file with default value", async () => {
      await AutoGenExportCommand.run([
        "-r",
        path.resolve(__dirname, "./integration/")
      ]);
      expect(recursiveGenerateExportFile).toBeCalledTimes(1);
      expect(recursiveGenerateExportFile).toHaveBeenLastCalledWith(
        generateExportFileDefaultInput
      );
    });
  });

  afterEach(() => {
    (recursiveGenerateExportFile as jest.Mock).mockClear();
    (generateExportFile as jest.Mock).mockClear();
  });
});
