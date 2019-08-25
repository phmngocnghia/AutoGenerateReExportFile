import * as path from "path";
import { travelSteps } from "./recursiveTravelDirectoryTestData";
import { recursiveTravelDirectory } from "../../utils/recursiveTravelDirectory";

describe("recursiveTravelDirectoryTestData", () => {
  it("Travel directory correctly", done => {
    // mock callBack
    const mockedCallBack = jest.fn();

    // execute function
    recursiveTravelDirectory({
      rootDirectory: path.resolve(
        __dirname,
        "./recursiveTravelDirectoryTestFolder"
      ),
      travelCallBack: mockedCallBack
    }).then(() => {
      /**
       * we not gonna assert it by order
       * make sure all element of of element has bee
       */
      expect(mockedCallBack).toHaveBeenCalledTimes(travelSteps.length);

      for (let i = 0; i < travelSteps.length; i++) {
        expect(mockedCallBack).toHaveBeenCalledWith(travelSteps[i]);
      }

      done();
    });
  });
});
