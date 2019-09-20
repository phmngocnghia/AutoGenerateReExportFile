import { Command, flags } from "@oclif/command";
import { dirname } from "path";
import { createIgnoreRegexString } from "./utils/createIgnoreRegexString";
import { isValidPathSync } from "./validators/isValidFolderPathSync";
import { watchDirHandler } from "./utils/watchDirHandler";
import { parseConfigFile } from "./utils/parseConfigFile";

import {
  recursiveGenerateExportFile,
  generateExportFile
} from "@autogen-export/core";

import { RecursiveGenerateReexportIndex } from "@autogen-export/core/dist/types/recursiveGenerateReexportIndex";
import { watch as chokidarWatch } from "chokidar";
import { resolve } from "path";

class AutogenExport extends Command {
  static description = "describe the command here";

  static flags = {
    cfg: flags.boolean({
      char: "c",
      description:
        "specify configuration file. If specifiied, all agurments except directory will be ignored "
    }),
    recursive: flags.boolean({
      char: "r",
      description: "generate recursively",
      default: false
    }),
    watch: flags.boolean({
      char: "w",
      description: "watch for file changed and re-generate re-export file",
      default: false
    })
  };

  static args = [
    {
      name: "rootDirectory",
      description: "path use for generate export file"
    },
    {
      name: "babelConfigPath",
      description: "If not specify. Use babel default config"
    },
    {
      name: "stripFileExts",
      description: "File exts which match stripFileExts will be striped ext",
      default: "ts,tsx,js,jsx"
    },
    {
      name: "fileExts",
      description: "Child file extensions that will be re-exported",
      default: "ts,tsx,js,jsx"
    },
    {
      name: "ignoreDestinationRegexs",
      description:
        "Path which matched regex will be ignored (use in recursive mode)",
      default: undefined
    },
    {
      name: "generatedFileExt",
      description:
        "Extension of generated file. Generated file name will be index",
      default: "ts"
    }
  ];

  async run() {
    const { args, flags } = this.parse(AutogenExport);
    const { recursive, watch, cfg } = flags;

    // test
    const {
      rootDirectory,
      stripFileExts,
      fileExts,
      ignoreDestinationRegexs,
      babelConfigPath,
      generatedFileExt
    } = cfg ? parseConfigFile() : args;

    if (!cfg && !rootDirectory) {
      throw new Error(
        "If not use config file then root directoy must be specify"
      );
    }

    let transformedIgnoreDestinationRegexs: RegExp[];

    if (ignoreDestinationRegexs && ignoreDestinationRegexs.length > 0) {
      transformedIgnoreDestinationRegexs = ignoreDestinationRegexs
        .split(",")
        .map(
          (ignoreDestinationRegex: string) => new RegExp(ignoreDestinationRegex)
        );
    } else {
      transformedIgnoreDestinationRegexs = [];
    }

    if (!isValidPathSync(rootDirectory)) {
      this.error(new Error("Root directory path is invalid"));
    }

    const generateExportFileParams: RecursiveGenerateReexportIndex = {
      rootDirectory,
      ignoreDestinationRegexs: transformedIgnoreDestinationRegexs,
      fileExts: fileExts.split(","),
      stripFileExts: stripFileExts.split(","),
      generatedFileExt,
      babelConfigPath
    };

    if (recursive) {
      recursiveGenerateExportFile(generateExportFileParams);
    } else {
      generateExportFile(generateExportFileParams);
    }

    const ignoreGenerateFileRegexString = createIgnoreRegexString({
      generatedFileExt,
      directoryPath: rootDirectory
    });

    const ignoreGenerateFileRegex = new RegExp(ignoreGenerateFileRegexString);

    if (watch) {
      console.log("watch mode detected. Proceed to watching for file change");
      const absoluteRootDirectory = resolve(process.cwd(), rootDirectory);

      const _watchDirHandler = (path: string) => {
        const dirName = dirname(path);
        watchDirHandler({
          path: dirName,
          generateExportFileParams
        });

        // Test purpose
        if ((global as any).waitForWatchDirHandlerCalled) {
          (global as any).waitForWatchDirHandlerCalled();
        }
      };

      const watcher = chokidarWatch(absoluteRootDirectory, {
        ignoreInitial: true,
        ignored: [ignoreGenerateFileRegex]
      })
        .on("add", _watchDirHandler)
        .on("change", _watchDirHandler)
        .on("unlink", _watchDirHandler)
        .on("unlinkDir", _watchDirHandler);

      if (process.env.NODE_ENV === "test") {
        (global as any).watcher = watcher;
      }
    }
  }
}

export = AutogenExport;
