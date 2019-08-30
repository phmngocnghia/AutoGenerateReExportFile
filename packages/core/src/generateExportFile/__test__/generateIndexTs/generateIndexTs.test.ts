import * as path from "path";
import { generateIndexTs } from "../../utils/generateIndexTs";
import { readFile } from "fs";

describe("generateIndexTs", () => {
  it("It should ignore if folder name inside ignoreDestinationRegexs", done => {
    // execute
    generateIndexTs({
      inputFileNames: ["resolvableFile.ts", "ts.ts", "js.js", "css.css"],
      inputDirectoryNames: ["resolvableFolder", "dir1", "dir2"],
      fileExts: ["ts", "js"],
      destinationPath: path.resolve(
        __dirname,
        "./generateIndexTsTestFolderEmpty"
      ),
      generatedFileExt: "ts",
      ignoreDestinationRegexs: [/generateIndexTsTestFolderEmpty/]
    }).then(() => {
      // assert data of generate index function
      readFile(
        path.resolve(__dirname, "./generateIndexTsTestFolderEmpty/index.ts"),
        "utf8",
        (_, data) => {
          expect(data).toBe(undefined);
          done();
        }
      );
    });
  });

  it("shouldn't create index.ts if nothing export", done => {
    generateIndexTs({
      inputFileNames: [],
      inputDirectoryNames: [],
      fileExts: [],
      destinationPath: path.resolve(
        __dirname,
        "./generateIndexTsTestFolderEmpty/"
      ),
      generatedFileExt: "ts",
      ignoreDestinationRegexs: []
    }).then(() => {
      // assert data of generate index function
      readFile(
        path.resolve(__dirname, "./generateIndexTsTestFolderEmpty/index.ts"),
        "utf8",
        (_, data) => {
          expect(data).toBe(undefined);
          done();
        }
      );
    });
  });

  it("work correctly", done => {
    // execute
    generateIndexTs({
      inputFileNames: ["resolvableFile.ts", "ts.ts", "js.js", "css.css"],
      inputDirectoryNames: ["resolvableFolder", "dir1", "dir2"],
      fileExts: ["ts", "js"],
      destinationPath: path.resolve(
        __dirname,
        "./generateIndexTsTestFolderNormal"
      ),
      generatedFileExt: "ts",
      ignoreDestinationRegexs: []
    }).then(() => {
      // assert data of generate index function
      readFile(
        path.resolve(__dirname, "./generateIndexTsTestFolderNormal/index.ts"),
        "utf8",
        (_, data) => {
          expect(data).toBe(`export * from './resolvableFile'
export * from './resolvableFolder'`);
          done();
        }
      );
    });
  });
});
