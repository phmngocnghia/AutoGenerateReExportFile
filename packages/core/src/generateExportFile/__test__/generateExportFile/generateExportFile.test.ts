import { generateExportFile } from "../../generateExportFile";
import { resolve } from "path";
import { readFileSync, readFile } from "fs";

describe("generateExportFileTest", () => {
  it("Should ignore folder if ignoreDestinationPaths is specify", async done => {
    await generateExportFile({
      rootDirectory: resolve(__dirname, "./generateExportFileTestFolderIgnore"),
      ignoreDestinationPaths: [/Empty/]
    });
    const testCases = [
      {
        file: resolve(
          __dirname,
          "./generateExportFileTestFolderIgnore/A/A.Empty/index.js"
        ),
        outputContent: undefined
      },
      {
        file: resolve(
          __dirname,
          "./generateExportFileTestFolderIgnore/A/index.js"
        ),
        outputContent: undefined
      },
      {
        file: resolve(
          __dirname,
          "./generateExportFileTestFolderIgnore/A/A.A/index.js"
        ),
        outputContent: undefined
      },
      {
        file: resolve(
          __dirname,
          "./generateExportFileTestFolderIgnore/B/index.js"
        ),
        outputContent: undefined
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
    await generateExportFile({
      fileExts: ["ts"],
      rootDirectory: resolve(__dirname, "./generateExportFileTestFolder"),
      ignoreDestinationPaths: []
    });
    const testCases = [
      {
        file: resolve(__dirname, "./generateExportFileTestFolder/A/index.js"),
        outputContent: undefined
      },
      {
        file: resolve(
          __dirname,
          "./generateExportFileTestFolder/A/A.A/index.js"
        ),
        outputContent: undefined
      },
      {
        file: resolve(__dirname, "./generateExportFileTestFolder/B/index.js"),
        outputContent: undefined
      }
    ];

    const promises = [];
    for (let { file, outputContent } of testCases) {
      promises.push(
        new Promise(resolve => {
          let fileContent: any = "";
          try {
            fileContent = readFileSync(file);
          } catch {
            if (outputContent !== undefined) {
              throw `output Content ${outputContent} is not undefined. File: ${file}`;
            }
            resolve();
          }
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
