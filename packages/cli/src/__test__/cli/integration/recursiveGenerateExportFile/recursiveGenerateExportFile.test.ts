import AutoGenExportCommand from "../../../../index";
import { resolve } from "path";
import { readFile } from "fs";
import {
  recursiveGenerateExportFile,
  generateExportFile
} from "@autogen-export/core";

describe("recursiveGenerateExportFileTest", () => {
  //   it("work correctly", async done => {
  //     const cliInput = [
  //       resolve(__dirname, "./recursiveGenerateExportFileTestFolder/"),
  //       resolve(__dirname, "./.babelrc")
  //     ];

  //     await AutoGenExportCommand.run(["-r", ...cliInput]);

  //     const testCases = [
  //       {
  //         file: resolve(
  //           __dirname,
  //           "./recursiveGenerateExportFileTestFolderIgnore/A/A.Empty/index.js"
  //         ),
  //         outputContent: undefined
  //       },
  //       {
  //         file: resolve(
  //           __dirname,
  //           "./recursiveGenerateExportFileTestFolderIgnore/A/index.js"
  //         ),
  //         outputContent: `export * from './es6DefaultExport'
  // export * from './es6NamedExport'
  // export * from './A.A'`
  //       },
  //       {
  //         file: resolve(
  //           __dirname,
  //           "./recursiveGenerateExportFileTestFolderIgnore/A/A.A/index.js"
  //         ),
  //         outputContent: `export * from './es6DefaultExport'
  // export * from './es6NamedExport'`
  //       },
  //       {
  //         file: resolve(
  //           __dirname,
  //           "./recursiveGenerateExportFileTestFolderIgnore/B/index.js"
  //         ),
  //         outputContent: `export * from './es6NamedExport'`
  //       }
  //     ];

  //     const promises = [];
  //     for (let { file, outputContent } of testCases) {
  //       promises.push(
  //         new Promise(resolve => {
  //           readFile(file, (_, content) => {
  //             expect(content ? content.toString() : undefined).toBe(
  //               outputContent
  //             );
  //             resolve();
  //           });
  //         })
  //       );
  //     }
  //     Promise.all(promises).then(() => {
  //       done();
  //     });
  //   });

  it("Should ignore folder if ignoreDestinationRegexs is specify", done => {
    const cliInput = [
      resolve(__dirname, "./recursiveGenerateExportFileTestFolderIgnore"),
      resolve(__dirname, "./.babelrc"),
      "ts,tsx,js,jsx",
      "ts,tsx,js,jsx",
      "/Empty"
    ];

    AutoGenExportCommand.run(["-r", ...cliInput]).then(() => {
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
        }
        // {
        //   file: resolve(
        //     __dirname,
        //     "./recursiveGenerateExportFileTestFolderIgnore/A/A.A/index.ts"
        //   ),
        //   outputContent: `export * from './es6DefaultExport'
        // export * from './es6NamedExport'`
        // },
        // {
        //   file: resolve(
        //     __dirname,
        //     "./recursiveGenerateExportFileTestFolderIgnore/B/index.ts"
        //   ),
        //   outputContent: `export * from './es6NamedExport'`
        // }
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
