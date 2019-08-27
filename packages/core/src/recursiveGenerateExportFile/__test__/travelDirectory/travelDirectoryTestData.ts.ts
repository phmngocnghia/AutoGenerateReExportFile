import * as path from "path";
import { travelSteps } from "./travelDirectoryTestData";
import { travelDirectory } from "../../utils/travelDirectory";

describe("travelDirectory", () => {
  it("Travel directory correctly", done => {
    // mock callBack
    const mockedCallBack = jest.fn();

    // execute function
    travelDirectory({
      rootDirectory: path.resolve(__dirname, "./travelDirectoryTestFolder/"),
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
