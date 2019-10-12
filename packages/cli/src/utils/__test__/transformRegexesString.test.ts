import { transformRegexesString } from "../transformRegexesString";

describe("transformRegexesString", () => {
  it("handles empty string", () => {
    expect(transformRegexesString("")).toEqual([]);
  });
  it("handles null string", () => {
    const any: any = null;
    expect(transformRegexesString(any)).toEqual([]);
  });
  it("handles regexes string", () => {
    expect(
      transformRegexesString("styles,^styles$").map(regex => regex.toString())
    ).toEqual(["/styles/", "/^styles$/"]);
  });
});
