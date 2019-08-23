import * as path from "path";
import { isFileContainExport } from "../../utils/isFileContainExport";

describe("isPathContainExport", () => {
  it("Work correctly", () => {
    const testCases = [
      { fileName: "emptyFile.ts", output: null },
      { fileName: "es6BadSyntax.ts", output: null },
      { fileName: "es6DefaultExport.ts", output: "es6DefaultExport.ts" },
      { fileName: "es6NamedExport.ts", output: "es6NamedExport.ts" },
      { fileName: "es6FunctionExport.ts", output: "es6FunctionExport.ts" },
      { fileName: "es6ExportSpecifier.ts", output: "es6ExportSpecifier.ts" },
    ]

    for (let { fileName, output } of testCases) {
      expect(isFileContainExport({
        fileName,
        destinationPath: path.resolve(__dirname, './isFileContainExportTestFolder')
      })).resolves.toBe(output);
    }
  });
});
