export const transformRegexesString = (regexesString: string) => {
  let transformedRegexesString: RegExp[];

  if (regexesString && regexesString.length > 0) {
    transformedRegexesString = regexesString
      .split(",")
      .map((regexString: string) => new RegExp(regexString));
  } else {
    transformedRegexesString = [];
  }

  return transformedRegexesString;
};
