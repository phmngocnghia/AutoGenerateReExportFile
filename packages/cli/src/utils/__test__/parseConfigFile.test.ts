describe("parseConfigFile", () => {
  it("Return value correctly", () => {
    jest.mock("fs", () => ({
      readFileSync: () => `
      {
        "rootDirectory": "./example/",
        "stripFileExts": "ts, tsx, js",
        "fileExts": "ts",
        "ignoreDestinationRegexs": "",
        "babelConfigPath": "./src/__test__/.babelrc",
        "generatedFileExt": "ts"
      }
          `
    }));
    const { parseConfigFile } = require("../parseConfigFile");
    expect(parseConfigFile()).toEqual({
      rootDirectory: "./example/",
      stripFileExts: "ts, tsx, js",
      fileExts: "ts",
      ignoreDestinationRegexs: "",
      babelConfigPath: "./src/__test__/.babelrc",
      generatedFileExt: "ts"
    });
  });

  it("Return default value correctly", () => {
    jest.resetModuleRegistry();
    jest.mock("fs", () => ({
      readFileSync: () => `
      {
        "rootDirectory": "./example/"
      }
          `
    }));
    const { parseConfigFile } = require("../parseConfigFile");
    expect(parseConfigFile()).toEqual({
      rootDirectory: "./example/",
      stripFileExts: "ts,tsx,js,jsx",
      fileExts: "ts,tsx,js,jsx",
      ignoreDestinationRegexs: undefined,
      babelConfigPath: undefined,
      generatedFileExt: "ts"
    });
  });

  it("Throw error if rootDirectory's not defined", () => {
    jest.mock("fs", () => ({
      readFileSync: () => `
      {
        "stripFileExts": "ts, tsx, js",
        "fileExts": "ts",
        "ignoreDestinationRegexs": "",
        "babelConfigPath": "./src/__test__/.babelrc",
        "generatedFileExt": "ts"
      }
          `
    }));
    const { parseConfigFile } = require("../parseConfigFile");
    try {
      parseConfigFile();
    } catch (err) {
      expect(err).toBe(
        "Invalid config file: Root directory parameter is required"
      );
    }
  });
});
