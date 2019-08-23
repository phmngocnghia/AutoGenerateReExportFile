import { recursiveGenerateExportFile } from "../../recursiveGenerateExportFile";

import { resolve } from "path";
import { readFileSync, readFile } from "fs";

describe("recursiveGenerateExportFileTest", () => {
  it("Should ignore folder if ignoreDestinationPaths is specify", async done => {
    await recursiveGenerateExportFile({
      fileExts: ["ts"],
      generatedFileExt: "js",
      rootDirectory: resolve(
        __dirname,
        "./recursiveGenerateExportFileTestFolderIgnore"
      ),
      ignoreDestinationPaths: [/Empty/]
    });
    const testCases = [
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolderIgnore/A/A.Empty//index.js"
        ),
        outputContent: undefined
      },
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolderIgnore/A/index.js"
        ),
        outputContent: `export * from './es6DefaultExport'
export * from './es6NamedExport'`
      },
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolderIgnore/A/A.A/index.js"
        ),
        outputContent: `export * from './es6DefaultExport'
export * from './es6NamedExport'`
      },
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolderIgnore/B/index.js"
        ),
        outputContent: `export * from './es6NamedExport'`
      }
    ];

    const promises = [];
    for (let { file, outputContent } of testCases) {
      promises.push(
        new Promise(resolve => {
          readFile(file, (_, content) => {
            expect(content ? content.toString() : undefined).toBe(
              outputContent
            );
            resolve();
          });
        })
      );
    }
    Promise.all(promises).then(() => {
      done();
    });
  });

  it("Work correctly", async done => {
    await recursiveGenerateExportFile({
      fileExts: ["ts"],
      generatedFileExt: "js",
      rootDirectory: resolve(
        __dirname,
        "./recursiveGenerateExportFileTestFolder"
      ),
      ignoreDestinationPaths: []
    });
    const testCases = [
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolder/A/index.js"
        ),
        outputContent: `export * from './es6DefaultExport'
export * from './es6NamedExport'`
      },
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolder/A/A.A/index.js"
        ),
        outputContent: `export * from './es6DefaultExport'
export * from './es6NamedExport'`
      },
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolder/B/index.js"
        ),
        outputContent: `export * from './es6NamedExport'`
      }
    ];

    const promises = [];
    for (let { file, outputContent } of testCases) {
      promises.push(
        new Promise(resolve => {
          const fileContent = readFileSync(file);
          expect(fileContent.toString()).toBe(outputContent);
          resolve();
        })
      );
    }
    Promise.all(promises).then(() => {
      done();
    });
  });
});
