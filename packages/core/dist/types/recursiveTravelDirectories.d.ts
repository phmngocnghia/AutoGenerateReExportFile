export interface TravelCallbackParams {
    directory: string;
    childDirectories: string[];
    childFiles: string[];
}
export interface RecursiveTravelDirectoriesInput {
    rootDirectory: string;
    readonly currentTravelDirectory?: string;
    travelCallBack: (params: TravelCallbackParams) => any;
}
