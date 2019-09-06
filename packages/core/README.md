**INSTALLATION:**

```npm install --dev @autogenerate-export/core```

```yarn add --dev @autogenerate-export/core```

**EXAMPLE CODE:**
```
const path = require("path");

const { recursiveGenerateExportFile } = require("@autogenerate-export/core");

recursiveGenerateExportFile({
  rootDirectory: path.resolve(__dirname, "./target"),
  fileExts: ["ts"],
  generatedFileExt: "ts",
  ignoreDestinationRegexs: []
});
```


**INTRODUCTION:**
This's a core package of Auto-Generate-Re-export-File package. This package provides core functionalities such as generateRexportFile of a specified folder.

Two primary exported APIs was: recursiveGenerateExportFile and generateExportFile.

**USAGE:**
```
export interface RecursiveGenerateReexportIndex {
  rootDirectory: string;
  fileExts?: string[];
  stripFileExts?: string[];
  generatedFileExt?: string;
  ignoreDestinationRegexs?: RegExp[];
  babelConfigPath?: string;
}
```

**PARAMETERS:**
-  **rootDirectory**:string  Directory to start  generating re-export file
-   **ignoreDestinationRegexs**: Folders whose name matched these regexes will be ignored when generating re-export file
-   **generatedFileExt**: Extension of generate re-exort file
-   **fileExts**: file extensions will be parsed (Re-export if It's 
-   **babelConfigPath**: babel config path that will be used by babel core to parse It's syntanx. Not required
-   **stripFileExts** = fileExts

**EXAMPLE**
All executable examples is placed in an example folder.