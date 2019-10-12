import AutoGenExportCommand from "../../../../index";
import { resolve } from "path";
import { readFile } from "fs";

describe("recursiveGenerateExportFile - integration test", () => {
  it("work correctly", async done => {
    const cliInput = [
      resolve(
        __dirname,
        "./recursiveGenerateExportFileTestFolderTestIgnoreFileMatchRegexes//"
      ),
      resolve(__dirname, "./.babelrc"),
      "ts,tsx,js,jsx",
      "ts,tsx,js,jsx",
      "",
      "ts",
      "styles"
    ];

    await AutoGenExportCommand.run(["-r", ...cliInput]);

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
