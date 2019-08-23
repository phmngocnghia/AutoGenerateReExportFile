import * as path from "path";
import { getFolderNamesInDestinationContainExport } from "../../utils/getFolderNamesInDestinationContainExport";

describe("getFolderNamesInDestinationContainExport", () => {
  it("Work correctly", (done) => {
    const input = {
      folderNames: [
        'emptyFile',
        'es6BadSyntax',
        'es6DefaultExport',
        'es6NamedExport',
      ],
      destinationPath: path.resolve(__dirname, './getFolderNamesInDestinationContainExportTestFolder/'),
      indexFileExt: 'ts'
    }

    const output = [
      'es6DefaultExport',
      'es6NamedExport',
    ]

    // expect(getFileNamesInDestinationContainExport(input)).resolves.toBe(output);
    getFolderNamesInDestinationContainExport(input).then(result => {
      expect(result).toEqual(output)
      done()
    })
  });
});
