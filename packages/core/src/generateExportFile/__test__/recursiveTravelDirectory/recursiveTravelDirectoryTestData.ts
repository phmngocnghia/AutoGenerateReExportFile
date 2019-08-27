import * as path from "path";
import { TravelCallbackParams } from "@types";

export let travelSteps: TravelCallbackParams[] = [
  { directory: "B/B.A", childDirectories: [], childFiles: [] },
  { directory: "B/B.B", childDirectories: [], childFiles: [] },
  { directory: "B", childDirectories: ["B.A", "B.B"], childFiles: [] },
  { directory: "A/A.A/A.A.A", childDirectories: [], childFiles: ["index.ts"] },
  { directory: "A/A.A", childDirectories: ["A.A.A"], childFiles: [] },
  { directory: "A", childDirectories: ["A.A"], childFiles: [] },
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
