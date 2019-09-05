import { createIgnoreRegexString } from "../createIgnoreRegexString";
import { resolve } from "path";

describe("createIgnoreRegexString", () => {
  it("Regex work as expected", () => {
    const InputcreateIgnoreRegexString = {
      generatedFileExt: "ts",
      directoryPath: "AutoGenerateReExportFile/packages/cli/example"
    };

    const testCases = [
      { input: resolve(__dirname, "../../../example/index.ts"), output: true },
      {
        input: resolve(__dirname, "../../../example/target/index.ts"),
        output: true
      },
      {
        input: resolve(__dirname, "../../../example/target/emptyFile.ts"),
        output: false
      }
    ];

    const regexString = createIgnoreRegexString(InputcreateIgnoreRegexString);
    for (let { input, output } of testCases) {
      const regex = new RegExp(regexString);
      const regexTestOutput = regex.test(input);
      expect(regexTestOutput).toBe(output);
    }
  });
});
