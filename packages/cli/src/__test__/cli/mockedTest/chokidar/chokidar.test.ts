import AutoGenExportCommand from "../../../../index";
import { sync } from "rimraf";
import { resolve } from "path";
import { writeFile, writeFileSync } from "fs";
import * as path from "path";
import { watchDirHandler } from "../../../../utils/watchDirHandler";

jest.mock("../../../../utils/watchDirHandler");
jest.mock("@autogen-export/core", () => ({
  generateExportFile: jest.fn(),
  recursiveGenerateExportFile: jest.fn()
}));

describe("Mocked chokidar test", () => {
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
    (watchDirHandler as jest.Mock).mockClear();
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
        resolve(__dirname, "./chokidarTestDirectory/b.ts"),
        "export default '1231'"
      );
      setTimeout(() => {
        expect(watchDirHandler).toBeCalledTimes(1);
        expect(watchDirHandler).toHaveBeenNthCalledWith(1, {
          path: resolve(__dirname, "./chokidarTestDirectory"),
          generateExportFileParams: {
            babelConfigPath: resolve(__dirname, "../.babelrc"),
            rootDirectory: resolve(__dirname, "./chokidarTestDirectory/"),
            fileExts: ["ts"],
            stripFileExts: ["ts"],
            generatedFileExt: "ts",
            ignoreDestinationRegexs: [/abc/, /xyz/]
          }
        });
        done();
      }, 500);
    });
  });

  beforeEach(() => {
    // clear file in test directory
    (watchDirHandler as jest.Mock).mockClear();
    const path = resolve(__dirname, "./chokidarTestDirectory/*");
    sync(path);
  });
});
