import { createIndexTsFileContent } from "../utils/createIndexTsFileContent";

describe("createIndexTsFileContent", () => {
  it("work correctly", () => {
    const fileNames = ["js.js", "ts.ts", "css.css"];
    const folderNames = ["folder1", "folder1.1"];

    const output = `export * from './js'
export * from './ts'
export * from './css.css'
export * from './folder1'
export * from './folder1.1'`;

    expect(
      createIndexTsFileContent({
        folderNames,
        fileNames
      })
    ).toEqual(output);
  });
});
