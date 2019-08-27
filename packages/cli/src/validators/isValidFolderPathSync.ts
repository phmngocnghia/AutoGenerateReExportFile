import { lstatSync } from "fs";

export const isValidPathSync = (path: string) => {
  try {
    const stat = lstatSync(path);
    if (stat.isDirectory()) {
      return true;
    }

    return false;
  } catch (err) {
    return false;
  }
};
