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
});
