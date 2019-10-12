import AutoGenExportCommand from "../../../../index";
import { resolve } from "path";
import { readFile } from "fs";

describe("recursiveGenerateExportFileTest- config file - integration test", () => {
  it("work correctly", async done => {
    await AutoGenExportCommand.run(["-c"]);

    const testCases = [
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolderTestIgnoreFileMatchRegexes/A/index.ts"
        ),
        outputContent: `export * from './es6DefaultExport'
export * from './A.A'`
      },
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolderTestIgnoreFileMatchRegexes/A/A.A/index.ts"
        ),
        outputContent: `export * from './es6DefaultExport'
export * from './es6NamedExport'`
      },
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolderTestIgnoreFileMatchRegexes/B/index.ts"
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
});
