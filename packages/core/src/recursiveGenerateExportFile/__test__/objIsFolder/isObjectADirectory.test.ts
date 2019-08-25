import { isObjectADirectory } from "../../utils/isObjectADirectory";
import { testCases } from "./isObjectADirectoryTestData";

describe("codegen", () => {
  describe("objIsFolder", () => {
    for (let {
      input: { obj, directory },
      output: desireOuput,
      name: testCaseName
    } of testCases) {
      it(testCaseName, () => {
        const output = isObjectADirectory({ directory, obj });
        expect(output).toBe(desireOuput);
      });
    }
  });
});
