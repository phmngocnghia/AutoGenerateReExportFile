export declare const isFileContainExport: ({
  fileName,
  destinationPath,
  babelConfigPath
}: {
  destinationPath: string;
  fileName: string;
  babelConfigPath?: string;
}) => Promise<string>;
