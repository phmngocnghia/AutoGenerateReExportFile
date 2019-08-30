import { Command, flags } from "@oclif/command";
import { isValidPathSync } from "./validators/isValidFolderPathSync";
import {
  recursiveGenerateExportFile,
  generateExportFile
} from "@autogen-export/core";

class AutogenExport extends Command {
  static description = "describe the command here";

  static flags = {
    recursive: flags.boolean({
      char: "r",
      description: "generate recursively",
      default: false
    })
  };

  static args = [
    {
      name: "rootDirectory",
      required: true,
      description: "path use for generatinghhh export file"
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

    const {
      rootDirectory,
      stripFileExts,
      fileExts,
      ignoreDestinationRegexs,
      babelConfigPath,
      generatedFileExt
    } = args;

    let transformedIgnoreDestinationRegexs: RegExp[] | undefined;

    if (ignoreDestinationRegexs && ignoreDestinationRegexs.length > 0) {
      transformedIgnoreDestinationRegexs = ignoreDestinationRegexs
        .split(",")
        .map(
          (ignoreDestinationRegex: string) => new RegExp(ignoreDestinationRegex)
        );
    } else {
      transformedIgnoreDestinationRegexs = [];
    }

    const { recursive } = flags;

    if (!isValidPathSync(rootDirectory)) {
      this.error(new Error("Root directory path is invalid"));
    }

    if (recursive) {
      recursiveGenerateExportFile({
        rootDirectory,
        ignoreDestinationRegexs: transformedIgnoreDestinationRegexs,
        fileExts: fileExts.split(","),
        stripFileExts: stripFileExts.split(","),
        generatedFileExt,
        babelConfigPath
      });
      return;
    }

    generateExportFile({
      rootDirectory,
      ignoreDestinationRegexs: transformedIgnoreDestinationRegexs,
      fileExts: fileExts.split(","),
      stripFileExts: stripFileExts.split(","),
      generatedFileExt,
      babelConfigPath
    });
  }
}

export default AutogenExport;
