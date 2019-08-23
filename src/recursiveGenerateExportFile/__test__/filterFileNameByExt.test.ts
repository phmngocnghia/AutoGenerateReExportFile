import { filterFileNameByExt } from "../utils/filterFileNameByExt";

describe("filterFileNameByExt", () => {
  it("work correctly", () => {
    const fileNames = ["js.js", "ts.ts", "css.css"];

    const fileExts = ["js", "ts"];

    const output = ["js.js", "ts.ts"];

    expect(filterFileNameByExt({ fileExts, fileNames })).toEqual(output);
  });
});
