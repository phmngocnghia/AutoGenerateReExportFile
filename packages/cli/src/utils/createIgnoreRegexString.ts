export const createIgnoreRegexString = ({
  generatedFileExt,
  directoryPath
}: {
  directoryPath: string;
  generatedFileExt: string;
}) => {
  // eslint-disable-next-line
  const escapeDirectoryPath = directoryPath.split("/").join("\\/");

  // eslint-disable-next-line
  return `.*${escapeDirectoryPath}.*index\\.${generatedFileExt}`;
};
