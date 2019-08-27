import * as path from "path";
import { getFileNamesInDestinationContainExport } from "../../utils/getFileNamesInDestinationContainExport";

describe("getFileNamesInDestinationContainExport", () => {
  it("Work correctly", done => {
    const input = {
      fileNames: [
        "emptyFile.ts",
        "es6BadSyntax.ts",
        "es6DefaultExport.ts",
        "es6NamedExport.ts"
      ],
      destinationPath: path.resolve(
        __dirname,
        "./getFileNamesInDestinationContainExportTestFolder/"
      )
    };

    const output = ["es6DefaultExport.ts", "es6NamedExport.ts"];

    // expect(getFileNamesInDestinationContainExport(input)).resolves.toBe(output);
    getFileNamesInDestinationContainExport(input).then(result => {
      expect(result).toEqual(output);
      done();
    });
  });
});
