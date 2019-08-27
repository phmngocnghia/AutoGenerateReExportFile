import * as fs from "fs";

import { RecursiveTravelDirectoriesInput } from "@types";

import { isObjectADirectory } from "./isObjectADirectory";

export const travelDirectory = ({
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

      /**
       * wait until all child directory have been travlled
       * use for testing purpuse...
       */
      travelCallBack({
        directory: currentTravelDirectory,
        childFiles,
        childDirectories
      });
      resolve();
    });
  });
};
