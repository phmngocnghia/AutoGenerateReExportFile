import { RecursiveTravelDirectoriesInput } from "@types";
/**
 * recursive travel all directory
 * Params:
 * directory: absolute path
 * travelCallback: call with each directory that have been travled
 * completeCallback: call when finish travel
 *
 * Just like travel a tree using DFS algorithm
 */
export declare const recursiveTravelDirectory: ({ rootDirectory, currentTravelDirectory, travelCallBack }: RecursiveTravelDirectoriesInput) => Promise<{}>;
