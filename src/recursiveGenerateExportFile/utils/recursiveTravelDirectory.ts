import * as fs from "fs";
import * as path from "path";

import { RecursiveTravelDirectoriesInput } from "@types";

import { isObjectADirectory } from "./isObjectADirectory";

/**
 * recursive travel all directory
 * Params:
 * directory: absolute path
 * travelCallback: call with each directory that have been travled
 * completeCallback: call when finish travel
 *
 * Just like travel a tree using DFS algorithm
 */
export const recursiveTravelDirectory = ({
  rootDirectory,
  currentTravelDirectory = rootDirectory,
  travelCallBack
}: RecursiveTravelDirectoriesInput) => {
  return new Promise(resolve => {
    fs.readdir(currentTravelDirectory, (err, objs) => {
      if (err) {
        throw err;
      }

      // get child branches of current branch
      const childDirectories = objs.filter(obj =>
        isObjectADirectory({ directory: currentTravelDirectory, obj })
      );

      const childFiles = objs.filter(
        obj => !isObjectADirectory({ directory: currentTravelDirectory, obj })
      );

      // travel the the deepst of node of the branch
      if (childDirectories.length === 0) {
        travelCallBack({
          directory: currentTravelDirectory,
          childFiles,
          childDirectories
        });
        resolve();
        return;
      }

      // for each branch in child branch, continue travel deep down
      const promises = [];
      for (let directory of childDirectories) {
        promises.push(
          recursiveTravelDirectory({
            travelCallBack,
            currentTravelDirectory: path.join(
              currentTravelDirectory,
              directory
            ),
            rootDirectory
          })
        );
      }

      /**
       * wait until all child directory have been travlled
       * use for testing purpuse...
       */
      Promise.all(promises).then(() => {
        travelCallBack({
          directory: currentTravelDirectory,
          childFiles,
          childDirectories
        });
        resolve();
      });
    });
  });
};
