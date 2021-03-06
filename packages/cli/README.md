**INTRODUCTION:**
This package provides CLI which integrates core package. Provide functionalities such as generate re-export file and recursively generate re-export file.


The core package is located at: [CORE PACKAGE](https://www.npmjs.com/package/@autogen-export/core)

**USAGE**
```
  $ autogen-export [ROOTDIRECTORY] [BABELCONFIGPATH] [STRIPFILEEXTS] [FILEEXTS] [IGNOREDESTINATIONREGEXS] [GENERATEDFILEEXT]
```

**ARGUMENTS**
```
  ROOTDIRECTORY            path use for generate export file
  BABELCONFIGPATH          If not specify. Use babel default config
  STRIPFILEEXTS            [default: ts,tsx,js,jsx] File exts which match stripFileExts will be striped ext
  FILEEXTS                 [default: ts,tsx,js,jsx] Child file extensions that will be re-exported
  IGNOREDESTINATIONREGEXS  Path which matched regex will be ignored (use in recursive mode)
  GENERATEDFILEEXT         [default: ts] Extension of generated file. Generated file name will be index
```

**OPTIONS**
```
  -c, --cfg        specify configuration file. If specifiied, all agurments except directory will be ignored
  -r, --recursive  generate recursively
  -w, --watch      watch for file changed and re-generate re-export file
```

**MY MEDIUM POST:**
[recursively-export-file-pattern-in-javascript-es6-application](https://medium.com/@phmngocnghia/recursively-export-file-pattern-in-javascript-es6-application-e56319de49af)

**EXAMPLE:**
* All executable examples is placed in an example folder.
* I have also create a example folder. Inited and installed `@autogen-export/cli` to demonstrate how it's work: https://github.com/phmngocnghia/AutoGenerateReExportFile/tree/master/examples/cli
* Just run npm scripts: `run:example` or `run:example-recursive`