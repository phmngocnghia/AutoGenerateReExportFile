import { Command, flags } from "@oclif/command";
import { isValidPathSync } from "./validators/isValidFolderPathSync";

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
    // const { recursive } = flags;

    if (!isValidPathSync(path)) {
      this.error("Path is not a folder or invalid path");
      this.exit();
    }
  }
}

export = AutogenExport;
