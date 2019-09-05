import AutoGenExportCommand from "../../../../index";
import { resolve } from "path";
import { readFile } from "fs";

describe("recursiveGenerateExportFileTest- Config file", () => {
  it("work correctly", async done => {
    await AutoGenExportCommand.run(["-c"]);

    const testCases = [
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolder/A/index.ts"
        ),
        outputContent: `export * from './es6DefaultExport'
export * from './es6NamedExport'
export * from './A.A'`
      },
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolder/A/A.A/index.ts"
        ),
        outputContent: `export * from './es6DefaultExport'
export * from './es6NamedExport'`
      },
      {
        file: resolve(
          __dirname,
          "./recursiveGenerateExportFileTestFolder/B/index.ts"
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
