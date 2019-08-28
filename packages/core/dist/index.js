(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else {
    var a = factory();
    for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
  }
})(global, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module"
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === "object" &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", {
        enumerable: true,
        value: value
      });
      /******/ if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__(
      (__webpack_require__.s = "./src/index.ts")
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ "./src/generateExportFile/generateExportFile.ts":
        /*!******************************************************!*\
  !*** ./src/generateExportFile/generateExportFile.ts ***!
  \******************************************************/
        /*! exports provided: generateExportFile */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateExportFile", function() { return generateExportFile; });\n/* harmony import */ var _utils_travelDirectory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/travelDirectory */ "./src/generateExportFile/utils/travelDirectory.ts");\n/* harmony import */ var _utils_generateIndexTs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/generateIndexTs */ "./src/generateExportFile/utils/generateIndexTs.ts");\n\n\nconst generateExportFile = ({\n  rootDirectory,\n  ignoreDestinationPaths,\n  generateFileExt = "js",\n  fileExts = ["ts", "tsx", "js", "jsx"],\n  babelConfigPath,\n  stripFileExts = fileExts\n}) => {\n  return Object(_utils_travelDirectory__WEBPACK_IMPORTED_MODULE_0__["travelDirectory"])({\n    rootDirectory,\n    travelCallBack: ({\n      directory,\n      childFiles,\n      childDirectories\n    }) => {\n      Object(_utils_generateIndexTs__WEBPACK_IMPORTED_MODULE_1__["generateIndexTs"])({\n        inputFileNames: childFiles.filter(childFild => !/index\\..+$/g.test(childFild)),\n        inputDirectoryNames: childDirectories,\n        destinationPath: directory,\n        fileExts,\n        ignoreDestinationPaths,\n        babelConfigPath,\n        stripFileExts,\n        generateFileExt\n      });\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/generateExportFile/generateExportFile.ts?'
          );

          /***/
        },

      /***/ "./src/generateExportFile/index.ts":
        /*!*****************************************!*\
  !*** ./src/generateExportFile/index.ts ***!
  \*****************************************/
        /*! exports provided: recursiveGenerateExportFile, generateExportFile */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _recursiveGenerateExportFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recursiveGenerateExportFile */ "./src/generateExportFile/recursiveGenerateExportFile.ts");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recursiveGenerateExportFile", function() { return _recursiveGenerateExportFile__WEBPACK_IMPORTED_MODULE_0__["recursiveGenerateExportFile"]; });\n\n/* harmony import */ var _generateExportFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateExportFile */ "./src/generateExportFile/generateExportFile.ts");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateExportFile", function() { return _generateExportFile__WEBPACK_IMPORTED_MODULE_1__["generateExportFile"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/generateExportFile/index.ts?'
          );

          /***/
        },

      /***/ "./src/generateExportFile/recursiveGenerateExportFile.ts":
        /*!***************************************************************!*\
  !*** ./src/generateExportFile/recursiveGenerateExportFile.ts ***!
  \***************************************************************/
        /*! exports provided: recursiveGenerateExportFile */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recursiveGenerateExportFile", function() { return recursiveGenerateExportFile; });\n/* harmony import */ var _utils_recursiveTravelDirectory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/recursiveTravelDirectory */ "./src/generateExportFile/utils/recursiveTravelDirectory.ts");\n/* harmony import */ var _utils_generateIndexTs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/generateIndexTs */ "./src/generateExportFile/utils/generateIndexTs.ts");\n\n\nconst recursiveGenerateExportFile = ({\n  rootDirectory,\n  ignoreDestinationPaths,\n  generateFileExt = "js",\n  fileExts = ["ts", "tsx", "js", "jsx"],\n  babelConfigPath,\n  stripFileExts = fileExts\n}) => {\n  return Object(_utils_recursiveTravelDirectory__WEBPACK_IMPORTED_MODULE_0__["recursiveTravelDirectory"])({\n    rootDirectory,\n    travelCallBack: ({\n      directory,\n      childFiles,\n      childDirectories\n    }) => {\n      Object(_utils_generateIndexTs__WEBPACK_IMPORTED_MODULE_1__["generateIndexTs"])({\n        inputFileNames: childFiles.filter(childFild => !/index\\..+$/g.test(childFild)),\n        inputDirectoryNames: childDirectories,\n        destinationPath: directory,\n        fileExts,\n        ignoreDestinationPaths,\n        babelConfigPath,\n        stripFileExts,\n        generateFileExt\n      });\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/generateExportFile/recursiveGenerateExportFile.ts?'
          );

          /***/
        },

      /***/ "./src/generateExportFile/utils/createIndexTsFileContent.ts":
        /*!******************************************************************!*\
  !*** ./src/generateExportFile/utils/createIndexTsFileContent.ts ***!
  \******************************************************************/
        /*! exports provided: createIndexTsFileContent */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIndexTsFileContent", function() { return createIndexTsFileContent; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createIndexTsFileContent = ({\n  fileNames,\n  folderNames,\n  stripFileExts = ["js", "ts"]\n}) => {\n  const transformedFileName = fileNames.map(fileName => {\n    const parseFileName = path__WEBPACK_IMPORTED_MODULE_0__["parse"](fileName);\n    const transformedFileExt = parseFileName.ext.substr(1, parseFileName.ext.length - 1);\n\n    if (stripFileExts.includes(transformedFileExt)) {\n      return parseFileName.name;\n    }\n\n    return fileName;\n  });\n  const names = [...transformedFileName, ...folderNames];\n  const fileContent = names.reduce((fileContent, name, index) => {\n    fileContent += `export * from \'./${name}\'`;\n\n    if (index < names.length - 1) {\n      fileContent += "\\n";\n    }\n\n    return fileContent;\n  }, "");\n  return fileContent;\n};\n\n//# sourceURL=webpack:///./src/generateExportFile/utils/createIndexTsFileContent.ts?'
          );

          /***/
        },

      /***/ "./src/generateExportFile/utils/filterFileNameByExt.ts":
        /*!*************************************************************!*\
  !*** ./src/generateExportFile/utils/filterFileNameByExt.ts ***!
  \*************************************************************/
        /*! exports provided: filterFileNameByExt */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFileNameByExt", function() { return filterFileNameByExt; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\nconst filterFileNameByExt = ({\n  fileNames,\n  fileExts\n}) => {\n  const fileNamesMatchExt = fileNames.filter(fileName => {\n    const string = path__WEBPACK_IMPORTED_MODULE_0__["extname"](fileName).split(".").pop();\n    return fileExts.includes(string);\n  });\n  return fileNamesMatchExt;\n};\n\n//# sourceURL=webpack:///./src/generateExportFile/utils/filterFileNameByExt.ts?'
          );

          /***/
        },

      /***/ "./src/generateExportFile/utils/generateIndexTs.ts":
        /*!*********************************************************!*\
  !*** ./src/generateExportFile/utils/generateIndexTs.ts ***!
  \*********************************************************/
        /*! exports provided: generateIndexTs */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateIndexTs", function() { return generateIndexTs; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _filterFileNameByExt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterFileNameByExt */ "./src/generateExportFile/utils/filterFileNameByExt.ts");\n/* harmony import */ var _createIndexTsFileContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createIndexTsFileContent */ "./src/generateExportFile/utils/createIndexTsFileContent.ts");\n/* harmony import */ var _getFileNamesInDestinationContainExport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getFileNamesInDestinationContainExport */ "./src/generateExportFile/utils/getFileNamesInDestinationContainExport.ts");\n/* harmony import */ var _getFolderNamesInDestinationContainExport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getFolderNamesInDestinationContainExport */ "./src/generateExportFile/utils/getFolderNamesInDestinationContainExport.ts");\n\n\n\n\n\n\nconst generateIndexTs = async ({\n  fileExts,\n  stripFileExts,\n  inputDirectoryNames,\n  inputFileNames,\n  generateFileExt,\n  destinationPath,\n  ignoreDestinationPaths,\n  babelConfigPath\n}) => {\n  // Ignore destination match destinations\n  if (ignoreDestinationPaths.some(ignoreDestinationPath => ignoreDestinationPath.test(destinationPath))) {\n    return;\n  }\n\n  const fileNamesMatchExt = Object(_filterFileNameByExt__WEBPACK_IMPORTED_MODULE_2__["filterFileNameByExt"])({\n    fileNames: inputFileNames,\n    fileExts\n  });\n  const [fileNames, folderNames] = await Promise.all([Object(_getFileNamesInDestinationContainExport__WEBPACK_IMPORTED_MODULE_4__["getFileNamesInDestinationContainExport"])({\n    fileNames: fileNamesMatchExt,\n    destinationPath,\n    babelConfigPath\n  }), Object(_getFolderNamesInDestinationContainExport__WEBPACK_IMPORTED_MODULE_5__["getFolderNamesInDestinationContainExport"])({\n    folderNames: inputDirectoryNames,\n    destinationPath,\n    indexstring: generateFileExt\n  })]); // create file content\n\n  const fileContent = Object(_createIndexTsFileContent__WEBPACK_IMPORTED_MODULE_3__["createIndexTsFileContent"])({\n    fileNames,\n    folderNames,\n    stripFileExts\n  });\n\n  if (!fileContent) {\n    return;\n  } // Print generated file name with success color\n\n\n  const indexFilePath = path__WEBPACK_IMPORTED_MODULE_1__["join"](destinationPath, `index.${generateFileExt}`);\n  console.log(`Generate ${indexFilePath}`); // create index file\n\n  return fs__WEBPACK_IMPORTED_MODULE_0__["writeFileSync"](indexFilePath, fileContent);\n};\n\n//# sourceURL=webpack:///./src/generateExportFile/utils/generateIndexTs.ts?'
          );

          /***/
        },

      /***/ "./src/generateExportFile/utils/getFileNamesInDestinationContainExport.ts":
        /*!********************************************************************************!*\
  !*** ./src/generateExportFile/utils/getFileNamesInDestinationContainExport.ts ***!
  \********************************************************************************/
        /*! exports provided: getFileNamesInDestinationContainExport */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileNamesInDestinationContainExport", function() { return getFileNamesInDestinationContainExport; });\n/* harmony import */ var _isFileContainExport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFileContainExport */ "./src/generateExportFile/utils/isFileContainExport.ts");\n\nconst getFileNamesInDestinationContainExport = async ({\n  fileNames,\n  destinationPath,\n  babelConfigPath\n}) => {\n  const fileNamePromiseObjects = fileNames.map(fileName => ({\n    fileName,\n    promiseCheckIfFileContainExport: Object(_isFileContainExport__WEBPACK_IMPORTED_MODULE_0__["isFileContainExport"])({\n      fileName,\n      destinationPath,\n      babelConfigPath\n    }).then(value => {\n      return value;\n    })\n  })); // wait until all file in destination has been checked\n\n  const promises = fileNamePromiseObjects.map(({\n    promiseCheckIfFileContainExport\n  }) => promiseCheckIfFileContainExport);\n  const fileNamesReturnedByPromise = await Promise.all(promises); // fileNamesOfFileContainExport\n\n  const fileNamesOfFileConrainExport = fileNamesReturnedByPromise.filter(x => typeof x == "string");\n  return fileNamesOfFileConrainExport;\n};\n\n//# sourceURL=webpack:///./src/generateExportFile/utils/getFileNamesInDestinationContainExport.ts?'
          );

          /***/
        },

      /***/ "./src/generateExportFile/utils/getFolderNamesInDestinationContainExport.ts":
        /*!**********************************************************************************!*\
  !*** ./src/generateExportFile/utils/getFolderNamesInDestinationContainExport.ts ***!
  \**********************************************************************************/
        /*! exports provided: getFolderNamesInDestinationContainExport */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFolderNamesInDestinationContainExport", function() { return getFolderNamesInDestinationContainExport; });\n/* harmony import */ var _isFolderContainExport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFolderContainExport */ "./src/generateExportFile/utils/isFolderContainExport.ts");\n\nconst getFolderNamesInDestinationContainExport = async ({\n  folderNames,\n  destinationPath,\n  indexstring\n}) => {\n  const folderNamePromiseObjects = folderNames.map(folderName => ({\n    folderName,\n    promiseCheckIfFileContainExport: Object(_isFolderContainExport__WEBPACK_IMPORTED_MODULE_0__["isFolderContainExport"])({\n      folderName,\n      destinationPath,\n      indexstring\n    }).then(value => {\n      return value;\n    })\n  })); // wait until all file in destination has been checked\n\n  const promises = folderNamePromiseObjects.map(({\n    promiseCheckIfFileContainExport\n  }) => promiseCheckIfFileContainExport);\n  const folderNamesReturnedByPromise = await Promise.all(promises); // folderNamesOfFileContainExport\n\n  const folderNamesOfFileConrainExport = folderNamesReturnedByPromise.filter(x => typeof x == "string");\n  return folderNamesOfFileConrainExport;\n};\n\n//# sourceURL=webpack:///./src/generateExportFile/utils/getFolderNamesInDestinationContainExport.ts?'
          );

          /***/
        },

      /***/ "./src/generateExportFile/utils/isFileContainExport.ts":
        /*!*************************************************************!*\
  !*** ./src/generateExportFile/utils/isFileContainExport.ts ***!
  \*************************************************************/
        /*! exports provided: isFileContainExport */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFileContainExport", function() { return isFileContainExport; });\n/* harmony import */ var _babel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/core */ "@babel/core");\n/* harmony import */ var _babel_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_traverse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/traverse */ "@babel/traverse");\n/* harmony import */ var _babel_traverse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_traverse__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/types */ "@babel/types");\n/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ "fs");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n // https://github.com/layne0625/auto-export-plugin/blob/master/index.js\n// path must be absolute\n// not throw anything to make sure it work correctly with promise.all\n\nconst isFileContainExport = ({\n  fileName,\n  destinationPath,\n  babelConfigPath = Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(process.cwd(), "./.babelrc")\n}) => {\n  return new Promise(resolve => {\n    try {\n      const filePath = path__WEBPACK_IMPORTED_MODULE_1__["resolve"](destinationPath, fileName);\n      const fileContent = Object(fs__WEBPACK_IMPORTED_MODULE_4__["readFileSync"])(filePath).toString();\n      const ast = Object(_babel_core__WEBPACK_IMPORTED_MODULE_0__["parseSync"])(fileContent, {\n        sourceType: "module",\n        filename: fileName,\n        configFile: babelConfigPath\n      }); // this thing run synchoronously\n      // @ts-ignore\n\n      _babel_traverse__WEBPACK_IMPORTED_MODULE_2___default()(ast, {\n        ExportAllDeclaration() {\n          resolve(fileName);\n        },\n\n        // 主要处理export const a = 1这种写法\n        ExportNamedDeclaration(path) {\n          // 考虑到一个文件中可能变量声明语法较多但不一定是export，所以对于`export const a = 1`这种写法，没有采用像其他3种方式一样单独对类型做处理，而是在ExportNamedDeclaration中进一步做判断并处理\n          if (_babel_types__WEBPACK_IMPORTED_MODULE_3__["isVariableDeclaration"](path.node.declaration)) {\n            resolve(fileName);\n          }\n        },\n\n        // 处理 export function getOne(){}写法\n        FunctionDeclaration(path) {\n          if (_babel_types__WEBPACK_IMPORTED_MODULE_3__["isExportNamedDeclaration"](path.parent)) {\n            resolve(fileName);\n          }\n        },\n\n        // 处理const A = 1; export { A }这种写法\n        ExportSpecifier() {\n          resolve(fileName);\n        },\n\n        // 处理export default写法， 如果是export default会用文件名作为变量名\n        ExportDefaultDeclaration() {\n          resolve(fileName);\n        }\n\n      });\n      resolve(null);\n    } catch (error) {\n      resolve(null);\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/generateExportFile/utils/isFileContainExport.ts?'
          );

          /***/
        },

      /***/ "./src/generateExportFile/utils/isFolderContainExport.ts":
        /*!***************************************************************!*\
  !*** ./src/generateExportFile/utils/isFolderContainExport.ts ***!
  \***************************************************************/
        /*! exports provided: isFolderContainExport */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFolderContainExport", function() { return isFolderContainExport; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _isFileContainExport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFileContainExport */ "./src/generateExportFile/utils/isFileContainExport.ts");\n\n\nconst isFolderContainExport = async ({\n  folderName,\n  destinationPath,\n  indexstring\n}) => {\n  try {\n    // check if file is parsable\n    if (await Object(_isFileContainExport__WEBPACK_IMPORTED_MODULE_1__["isFileContainExport"])({\n      destinationPath: path__WEBPACK_IMPORTED_MODULE_0__["join"](destinationPath, folderName),\n      fileName: `index.${indexstring}`\n    })) {\n      return folderName;\n    }\n\n    return null;\n  } catch (err) {\n    return null;\n  }\n};\n\n//# sourceURL=webpack:///./src/generateExportFile/utils/isFolderContainExport.ts?'
          );

          /***/
        },

      /***/ "./src/generateExportFile/utils/isObjectADirectory.ts":
        /*!************************************************************!*\
  !*** ./src/generateExportFile/utils/isObjectADirectory.ts ***!
  \************************************************************/
        /*! exports provided: isObjectADirectory */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectADirectory", function() { return isObjectADirectory; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/**\n * return true if obj is a directory\n * return false if obj is not a directory\n * throw error if obj is exist\n */\nfunction isObjectADirectory({\n  directory,\n  obj\n}) {\n  const objPath = path__WEBPACK_IMPORTED_MODULE_1__["join"](directory, obj);\n  const objStat = fs__WEBPACK_IMPORTED_MODULE_0__["statSync"](objPath);\n  return objStat.isDirectory();\n}\n\n//# sourceURL=webpack:///./src/generateExportFile/utils/isObjectADirectory.ts?'
          );

          /***/
        },

      /***/ "./src/generateExportFile/utils/recursiveTravelDirectory.ts":
        /*!******************************************************************!*\
  !*** ./src/generateExportFile/utils/recursiveTravelDirectory.ts ***!
  \******************************************************************/
        /*! exports provided: recursiveTravelDirectory */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recursiveTravelDirectory", function() { return recursiveTravelDirectory; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _isObjectADirectory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectADirectory */ "./src/generateExportFile/utils/isObjectADirectory.ts");\n\n\n\n/**\n * recursive travel all directory\n * Params:\n * directory: absolute path\n * travelCallback: call with each directory that have been travled\n * completeCallback: call when finish travel\n *\n * Just like travel a tree using DFS algorithm\n */\n\nconst recursiveTravelDirectory = ({\n  rootDirectory,\n  currentTravelDirectory = rootDirectory,\n  travelCallBack\n}) => {\n  return new Promise(resolve => {\n    fs__WEBPACK_IMPORTED_MODULE_0__["readdir"](currentTravelDirectory, (err, objs) => {\n      if (err) {\n        throw err;\n      } // get child branches of current branch\n\n\n      const childDirectories = objs.filter(obj => Object(_isObjectADirectory__WEBPACK_IMPORTED_MODULE_2__["isObjectADirectory"])({\n        directory: currentTravelDirectory,\n        obj\n      }));\n      const childFiles = objs.filter(obj => !Object(_isObjectADirectory__WEBPACK_IMPORTED_MODULE_2__["isObjectADirectory"])({\n        directory: currentTravelDirectory,\n        obj\n      })); // travel the the deepst of node of the branch\n\n      if (childDirectories.length === 0) {\n        travelCallBack({\n          directory: currentTravelDirectory,\n          childFiles,\n          childDirectories\n        });\n        resolve();\n        return;\n      } // for each branch in child branch, continue travel deep down\n\n\n      const promises = [];\n\n      for (let directory of childDirectories) {\n        promises.push(recursiveTravelDirectory({\n          travelCallBack,\n          currentTravelDirectory: path__WEBPACK_IMPORTED_MODULE_1__["join"](currentTravelDirectory, directory),\n          rootDirectory\n        }));\n      }\n      /**\n       * wait until all child directory have been travlled\n       * use for testing purpuse...\n       */\n\n\n      Promise.all(promises).then(() => {\n        travelCallBack({\n          directory: currentTravelDirectory,\n          childFiles,\n          childDirectories\n        });\n        resolve();\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/generateExportFile/utils/recursiveTravelDirectory.ts?'
          );

          /***/
        },

      /***/ "./src/generateExportFile/utils/travelDirectory.ts":
        /*!*********************************************************!*\
  !*** ./src/generateExportFile/utils/travelDirectory.ts ***!
  \*********************************************************/
        /*! exports provided: travelDirectory */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelDirectory", function() { return travelDirectory; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _isObjectADirectory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectADirectory */ "./src/generateExportFile/utils/isObjectADirectory.ts");\n\n\nconst travelDirectory = ({\n  rootDirectory,\n  currentTravelDirectory = rootDirectory,\n  travelCallBack\n}) => {\n  return new Promise(resolve => {\n    fs__WEBPACK_IMPORTED_MODULE_0__["readdir"](currentTravelDirectory, (err, objs) => {\n      if (err) {\n        throw err;\n      } // get child branches of current branch\n\n\n      const childDirectories = objs.filter(obj => Object(_isObjectADirectory__WEBPACK_IMPORTED_MODULE_1__["isObjectADirectory"])({\n        directory: currentTravelDirectory,\n        obj\n      }));\n      const childFiles = objs.filter(obj => !Object(_isObjectADirectory__WEBPACK_IMPORTED_MODULE_1__["isObjectADirectory"])({\n        directory: currentTravelDirectory,\n        obj\n      })); // travel the the deepst of node of the branch\n\n      if (childDirectories.length === 0) {\n        travelCallBack({\n          directory: currentTravelDirectory,\n          childFiles,\n          childDirectories\n        });\n        resolve();\n        return;\n      }\n      /**\n       * wait until all child directory have been travlled\n       * use for testing purpuse...\n       */\n\n\n      travelCallBack({\n        directory: currentTravelDirectory,\n        childFiles,\n        childDirectories\n      });\n      resolve();\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/generateExportFile/utils/travelDirectory.ts?'
          );

          /***/
        },

      /***/ "./src/index.ts":
        /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
        /*! exports provided: recursiveGenerateExportFile, generateExportFile */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          "use strict";
          eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generateExportFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateExportFile */ "./src/generateExportFile/index.ts");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recursiveGenerateExportFile", function() { return _generateExportFile__WEBPACK_IMPORTED_MODULE_0__["recursiveGenerateExportFile"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateExportFile", function() { return _generateExportFile__WEBPACK_IMPORTED_MODULE_0__["generateExportFile"]; });\n\n\n\n//# sourceURL=webpack:///./src/index.ts?'
          );

          /***/
        },

      /***/ "@babel/core":
        /*!******************************!*\
  !*** external "@babel/core" ***!
  \******************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("@babel/core");\n\n//# sourceURL=webpack:///external_%22@babel/core%22?'
          );

          /***/
        },

      /***/ "@babel/traverse":
        /*!**********************************!*\
  !*** external "@babel/traverse" ***!
  \**********************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("@babel/traverse");\n\n//# sourceURL=webpack:///external_%22@babel/traverse%22?'
          );

          /***/
        },

      /***/ "@babel/types":
        /*!*******************************!*\
  !*** external "@babel/types" ***!
  \*******************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("@babel/types");\n\n//# sourceURL=webpack:///external_%22@babel/types%22?'
          );

          /***/
        },

      /***/ fs:
        /*!*********************!*\
  !*** external "fs" ***!
  \*********************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("fs");\n\n//# sourceURL=webpack:///external_%22fs%22?'
          );

          /***/
        },

      /***/ path:
        /*!***********************!*\
  !*** external "path" ***!
  \***********************/
        /*! no static exports found */
        /***/ function(module, exports) {
          eval(
            'module.exports = require("path");\n\n//# sourceURL=webpack:///external_%22path%22?'
          );

          /***/
        }

      /******/
    }
  );
});
