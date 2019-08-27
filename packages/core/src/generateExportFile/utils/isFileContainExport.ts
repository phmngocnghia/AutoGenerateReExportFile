import { parseSync } from "@babel/core";
import { resolve } from "path";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import * as path from "path";
import { readFileSync } from "fs";

// https://github.com/layne0625/auto-export-plugin/blob/master/index.js
// path must be absolute
// not throw anything to make sure it work correctly with promise.all
export const isFileContainExport = ({
  fileName,
  destinationPath,
  babelConfigPath = resolve(process.cwd(), "./.babelrc")
}: {
  destinationPath: string;
  fileName: string;
  babelConfigPath?: string;
}): Promise<string | null> => {
  return new Promise(resolve => {
    try {
      const filePath = path.resolve(destinationPath, fileName);
      const fileContent = readFileSync(filePath).toString();

      const ast = parseSync(fileContent, {
        sourceType: "module",
        filename: fileName,
        configFile: babelConfigPath
      });

      // this thing run synchoronously
      // @ts-ignore
      traverse(ast, {
        ExportAllDeclaration() {
          resolve(fileName);
        },
        // 主要处理export const a = 1这种写法
        ExportNamedDeclaration(path) {
          // 考虑到一个文件中可能变量声明语法较多但不一定是export，所以对于`export const a = 1`这种写法，没有采用像其他3种方式一样单独对类型做处理，而是在ExportNamedDeclaration中进一步做判断并处理
          if (t.isVariableDeclaration(path.node.declaration)) {
            resolve(fileName);
          }
        },

        // 处理 export function getOne(){}写法
        FunctionDeclaration(path) {
          if (t.isExportNamedDeclaration(path.parent)) {
            resolve(fileName);
          }
        },

        // 处理const A = 1; export { A }这种写法
        ExportSpecifier() {
          resolve(fileName);
        },

        // 处理export default写法， 如果是export default会用文件名作为变量名
        ExportDefaultDeclaration() {
          resolve(fileName);
        }
      });
      resolve(null);
    } catch (error) {
      resolve(null);
    }
  });
};
