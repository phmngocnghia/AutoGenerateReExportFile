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

describe("Auto Gen Export Command - Watch mode", () => {
  const generateExportFileDefaultInput: RecursiveGenerateReexportIndex = {
    stripFileExts: ["ts", "tsx", "js", "jsx"],
    fileExts: ["ts", "tsx", "js", "jsx"],
    rootDirectory: path.resolve(__dirname, "./integration/"),
    babelConfigPath: undefined,
    generatedFileExt: "ts",
    ignoreDestinationRegexs: []
  };

  it("It's generate index file after file changed", async () => {
    await AutoGenExportCommand.run([
      "-w",
      path.resolve(__dirname, "./integration/")
    ]);
    expect(recursiveGenerateExportFile).toBeCalledTimes(1);
    expect(recursiveGenerateExportFile).toHaveBeenLastCalledWith(
      generateExportFileDefaultInput
    );
  });

  // it("It's generate index file after file changed", async () => {
  //   await AutoGenExportCommand.run([
  //     "-w",
  //     path.resolve(__dirname, "./integration/")
  //   ]);
  //   expect(recursiveGenerateExportFile).toBeCalledTimes(1);
  //   expect(recursiveGenerateExportFile).toHaveBeenLastCalledWith(
  //     generateExportFileDefaultInput
  //   );
  // });

  // it("It's regenerate index file after new file added", async () => {
  //   await AutoGenExportCommand.run([
  //     "-w",
  //     path.resolve(__dirname, "./integration/")
  //   ]);
  //   expect(recursiveGenerateExportFile).toBeCalledTimes(1);
  //   expect(recursiveGenerateExportFile).toHaveBeenLastCalledWith(
  //     generateExportFileDefaultInput
  //   );
  // });

  afterEach(() => {
    (recursiveGenerateExportFile as jest.Mock).mockClear();
    (generateExportFile as jest.Mock).mockClear();
  });
});
