import { createIndexTsFileContent } from "../utils/createIndexTsFileContent";

describe("createIndexTsFileContent", () => {
  it("work correctly", () => {
    const fileNames = ["js.js", "ts.ts", "css.css"];

    const output = `export * from './js'
export * from './ts'
export * from './css'`;

    expect(createIndexTsFileContent(fileNames)).toEqual(output);
  });
});
