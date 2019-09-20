# WHAT IS THIS ?
Auto-generate-export file is a utility tool which generates index file exported all of Its child folder (that contain exportable index file) and child file.

It's work with Typescript, Javascript ES6. It has many configurable options that allow you to tweak all of Its aspect:
Extension type of a generated file.
Extension of a file that will be parsed.
Ignore specific folder.

**MY MEDIUM POST:**
 - (recursively-export-file-pattern-in-javascript-es6-application)[https://medium.com/@phmngocnghia/recursively-export-file-pattern-in-javascript-es6-application-e56319de49af]

**EXAMPLE:**
* Core package example folder. Inited and installed `@autogen-export/cli` to demonstrate how it's work: https://github.com/phmngocnghia/AutoGenerateReExportFile/tree/master/examples/core
* CLI package example folder. Inited and installed `@autogen-export/cli` to demonstrate how it's work: https://github.com/phmngocnghia/AutoGenerateReExportFile/tree/master/examples/cli
* Just run npm scripts: `run:example` or `run:example-recursive`

# ARCHITECTURE:
This repository applies mono repo architecture. Each package resides in "package" folder:
* Core
  * https://github.com/phmngocnghia/AutoGenerateReExportFile/tree/master/packages/cli
* CLI: A friendlier CommandLineInterface for our end users.
  * https://github.com/phmngocnghia/AutoGenerateReExportFile/tree/master/packages/core

# CODE OF CONDUCT:
PR must have a test files.

# FOOT NOTES:
I'm open to any suggestions: add a new functionality request. If you have any ideas. Feel free to make A PR.