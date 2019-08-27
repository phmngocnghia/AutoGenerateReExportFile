import { Command, flags } from "@oclif/command";
import { lstatSync } from "fs";

class AutogenExport extends Command {
  static description = "describe the command here";

  static flags = {
    recursive: flags.boolean({
      char: "r",
      description: "generate recursively"
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
    const { args, flags } = this.parse(AutogenExport);

    const { path } = args;
    const { recursive } = flags;
    // const name = flags.name || "world";
    // this.log(`hello ${name} from ./src/index.ts`);
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`);
    // }
    console.log("Hello world");
  }
}

export = AutogenExport;
