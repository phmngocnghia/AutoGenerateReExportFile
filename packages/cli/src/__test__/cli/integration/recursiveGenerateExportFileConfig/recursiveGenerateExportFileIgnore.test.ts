import AutoGenExportCommand from "../../../../index";
import { resolve } from "path";
import { readFile } from "fs";

describe("recursiveGenerateExportFileIgnoreTest - Config file", () => {
  it("Should ignore folder if ignoreDestinationRegexs is specify", done => {
    AutoGenExportCommand.run(["-c"]).then(() => {
      const testCases = [
        {
          file: resolve(
            __dirname,
            "./recursiveGenerateExportFileTestFolderIgnore/A/A.Empty/index.ts"
          ),
          outputContent: undefined
        },
        {
          file: resolve(
            __dirname,
            "./recursiveGenerateExportFileTestFolderIgnore/A/index.ts"
          ),
          outputContent: `export * from './es6DefaultExport'
export * from './es6NamedExport'
export * from './A.A'`
        },
        {
          file: resolve(
            __dirname,
            "./recursiveGenerateExportFileTestFolderIgnore/A/A.A/index.ts"
          ),
          outputContent: `export * from './es6DefaultExport'
export * from './es6NamedExport'`
        },
        {
          file: resolve(
            __dirname,
            "./recursiveGenerateExportFileTestFolderIgnore/B/index.ts"
          ),
          outputContent: `export * from './es6NamedExport'`
        }
      ];

      const promises = [];
      for (let { file, outputContent } of testCases) {
        promises.push(
          new Promise(resolve => {
            readFile(file, (_, content) => {
              expect(content ? content.toString().trim() : undefined).toBe(
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
});
