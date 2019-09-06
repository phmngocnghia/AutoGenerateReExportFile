# What is this ?
Auto-generate-export file is a utility tool which generates index file exported all of Its child folder (that contain exportable index file) and child file.

It's work with Typescript, Javascript ES6. It has many configurable options that allow you to tweak all of Its aspect:
Extension type of a generated file.
Extension of a file that will be parsed.
Ignore specific folder.

# Architecture:
This repository applies mono repo architecture. Each package resides in "package" folder:
* Core
  * https://github.com/phmngocnghia/AutoGenerateReExportFile/tree/master/packages/cli
* CLI: A friendlier CommandLineInterface for our end users.
  * https://github.com/phmngocnghia/AutoGenerateReExportFile/tree/master/packages/core

# Code of conduct:
PR must have a test files.

# Foot notes:
I'm open to any suggestions: add a new functionality request. If you have any ideas. Feel free to make A PR.