import AutoGenExportCommand from "../../../../index";
import { sync } from "rimraf";
import { resolve } from "path";
import { writeFile, writeFileSync } from "fs";
import * as path from "path";
import { watchDirHandler } from "../../../../utils/watchDirHandler";

jest.mock("../../../../utils/watchDirHandler.ts");
jest.mock("@autogen-export/core", () => ({
  generateExportFile: jest.fn(),
  recursiveGenerateExportFile: jest.fn()
}));

describe("Mocked chokidar test", () => {
  afterEach(() => {
    (watchDirHandler as jest.Mock).mockClear();
  });
  describe("Ignore file", () => {
    it("Ignore initial file", done => {
      writeFile(
        resolve(__dirname, "./chokidarTestDirectory/a.ts"),
        "export default 'a'",
        err => {
          if (err) {
            throw err;
          }

          const dir = path.resolve(__dirname, "./chokidarTestDirectory");
          AutoGenExportCommand.run([
            "-w",
            dir,
            resolve(__dirname, "../.babelrc"),
            "ts",
            "ts",
            "",
            "ts"
          ]).then(() => {
            setTimeout(() => {
              expect(watchDirHandler).toHaveBeenCalledTimes(0);
              (global as any).watcher.close();
              done();
            }, 500);
          });
        }
      );
    });

    it("Ignore generated index file in chokidarTestDirectory", done => {
      let promiseWaitForWatchDirHandlerCalled = new Promise(resolve => {
        (global as any).waitForWatchDirHandlerCalled = resolve;
      });

      const dir = path.resolve(__dirname, "./chokidarTestDirectory");
      AutoGenExportCommand.run([
        "-w",
        dir,
        resolve(__dirname, "../.babelrc"),
        "ts",
        "ts",
        "",
        "ts"
      ]).then(() => {
        writeFileSync(
          resolve(__dirname, "./chokidarTestDirectory/index.ts"),
          "export default '1231'"
        );
        // Assert by setTimeOut 500 ms and set time
        setTimeout(() => {
          expect(watchDirHandler).toHaveBeenCalledTimes(0);
          (global as any).watcher.close();
          done();
        }, 500);
      });
    });
  });

  it("Call watchDirHandler correctly", done => {
    let promiseWaitForWatchDirHandlerCalled = new Promise(resolve => {
      (global as any).waitForWatchDirHandlerCalled = resolve;
    });

    const dir = path.resolve(__dirname, "./chokidarTestDirectory");
    AutoGenExportCommand.run([
      "-w",
      dir,
      resolve(__dirname, "../.babelrc"),
      "ts",
      "ts",
      "abc,xyz",
      "ts"
    ]).then(() => {
      // create "index.ts file"
      writeFileSync(
        resolve(__dirname, "./chokidarTestDirectory/index2.ts"),
        "export default '1231'"
      );

      promiseWaitForWatchDirHandlerCalled.then(() => {
        expect(watchDirHandler).toBeCalledTimes(1);
        expect(watchDirHandler).toHaveBeenNthCalledWith(1, {
          path: resolve(__dirname, "./chokidarTestDirectory/index2.ts"),
          generateExportFileParams: {
            babelConfigPath: resolve(__dirname, "../.babelrc"),
            rootDirectory: resolve(__dirname, "./chokidarTestDirectory/"),
            fileExts: ["ts"],
            stripFileExts: ["ts"],
            generatedFileExt: "ts",
            ignoreDestinationRegexs: [/abc/, /xyz/]
          }
        });
      });
      done();
    });
  });

  afterEach(() => {
    // clear file in test directory
    const path = resolve(__dirname, "./chokidarTestDirectory/*");

    sync(path);
  });
});
