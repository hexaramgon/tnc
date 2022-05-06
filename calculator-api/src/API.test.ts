/**
 * API Tester file, to test just simply type "jest" or "npm run test" in the cmd
 * @author Yunhao Cao (https://github.com/ToiletCommander)
 */

import * as APILib from './index';
//adds a new test to jest, named "Get defaults and results api"
test("Get defaults and results api",() => {

    //initialize api caller class
    let caller = new APILib.GET_DEFAULTS_AND_RESULTS_API();

    //this is an asynchronous test so we return the promise object to jest
    return caller.callAPI({
        input_income: APILib.RawAPIHouseHoldIncomeType.Average,
        input_location: "94704",
        input_location_mode: APILib.RawAPIInputLocationModeType.ZipCode,
        input_size: APILib.RawAPIHouseHoldSizeType.Average
    }).then((value) => {
        APILib.rawInputParamNames.forEach((key) => {
            expect(value).toHaveProperty(key);
        })
        APILib.rawResponseParamNames.forEach((key) => {
            expect(value).toHaveProperty(key);
        });
    });
});

//Initialize a failed case test for the "get defaults and results" api
test("Wrong address with defaults and results api",async () => {
    //Initialize API Caller
    let caller = new APILib.GET_DEFAULTS_AND_RESULTS_API();

    /** We are still using asynchronous calls, 
     * but notice that the syntax here is a bit different,
     * remember both of them works! Read about JEST docs!
     */
    await expect(caller.callAPI({
        input_income: APILib.RawAPIHouseHoldIncomeType.Average,
        input_location: "94704LALALALA", //wrong location
        input_location_mode: APILib.RawAPIInputLocationModeType.County, //wrong mode
        input_size: APILib.RawAPIHouseHoldSizeType.Four
    })).rejects.toThrow("Location not found");
})