export interface TravelCallbackParams {
  directory: string;
  childDirectories: string[];
  childFiles: string[];
}

export interface RecursiveTravelDirectoriesInput {
  rootDirectory: string;
  readonly currentTravelDirectory?: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  travelCallBack: (params: TravelCallbackParams) => any;
}
