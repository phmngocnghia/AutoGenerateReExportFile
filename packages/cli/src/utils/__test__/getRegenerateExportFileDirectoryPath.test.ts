import { getRegenerateExportFileDirectoryPath } from "../getRegenerateExportFileDirectoryPath";
describe("getRegenerateExportFileDirectoryPath", () => {
  it("Work correctly", () => {
    const input = {
      rootDirectoryPath: "/user",
      directoryPathOfFileChange: "/user/phmngocnghia/desktop"
    };

    const output = ["/user/phmngocnghia/desktop", "/user/phmngocnghia"];

    expect(getRegenerateExportFileDirectoryPath(input)).toEqual(output);
  });

  it("Handle directoryPathOfFileChange = rootDirectory path correct", () => {
    const input = {
      rootDirectoryPath: "/user",
      directoryPathOfFileChange: "/user"
    };

    const output = ["/user"];

    expect(getRegenerateExportFileDirectoryPath(input)).toEqual(output);
  });

  it("Handle absolute directory", () => {
    process.cwd = () => "/";

    const input = {
      rootDirectoryPath: "./user",
      directoryPathOfFileChange: "/user/phmngocnghia/desktop"
    };

    const output = ["/user/phmngocnghia/desktop", "/user/phmngocnghia"];

    expect(getRegenerateExportFileDirectoryPath(input)).toEqual(output);
  });

  it("Handle not correct rootDirectory and directoryPathOfFileChange correctly", () => {
    const input = {
      rootDirectoryPath: "./user2",
      directoryPathOfFileChange: "/user/phmngocnghia/desktop"
    };

    expect(getRegenerateExportFileDirectoryPath(input)).toEqual([]);
  });

  it("Handle handle rootDirectory as relative directory", () => {
    process.cwd = () => "/Users/phmngocnghia/Desktop/ExampleWebpack/";
    const input = {
      rootDirectoryPath: "./src",
      directoryPathOfFileChange:
        "/Users/phmngocnghia/Desktop/ExampleWebpack/src"
    };

    const output = ["/Users/phmngocnghia/Desktop/ExampleWebpack/src"];

    expect(getRegenerateExportFileDirectoryPath(input)).toEqual(output);
  });
});
