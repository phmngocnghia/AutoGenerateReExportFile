import { isValidPathSync } from "../../../validators/isValidFolderPathSync";
import { resolve } from "path";

describe("isValidFolderPathSync", () => {
  it("Work correctly", () => {
    const testCases = [
      {
        input: resolve(__dirname, "./isValidFolderPathSyncTestFolder"),
        output: true
      },
      {
        input: resolve(__dirname, "./file.ts"),
        output: false
      },
      {
        input: resolve(__dirname, "./NotExistFolder"),
        output: false
      }
    ];

    for (let { input, output } of testCases) {
      expect(isValidPathSync(input)).toBe(output);
    }
  });
});
