import { Command, flags } from "@oclif/command";
import { isValidPathSync } from "./validators/isValidFolderPathSync";
import { recursiveGenerateExportFile } from "@autogen-export/core";

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
      name: "path",
      required: true,
      description: "path to start generate export file"
    }
  ];

  async run() {
    const { args } = this.parse(AutogenExport);
    const { path } = args;

    if (!isValidPathSync(path)) {
      this.error("Path is not a folder or invalid path");
      this.exit();
    }

    const { recursive } = args;
    if (recursive) {
      // recursive generate re-export
      // recursiveGenerateExportFile({});
      return;
    }
  }
}

export = AutogenExport;
