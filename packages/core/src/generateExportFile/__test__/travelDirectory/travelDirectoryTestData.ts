import * as path from "path";
import { TravelCallbackParams } from "@types";

export let travelSteps: TravelCallbackParams[] = [
  { directory: "", childDirectories: ["A", "B"], childFiles: [] }
].map(({ directory, childDirectories, childFiles }) => {
  const mappedDirectory = path.join(
    __dirname,
    "./recursiveTravelDirectoryTestFolder",
    directory
  );
  return {
    directory: mappedDirectory,
    childDirectories,
    childFiles
  };
});
