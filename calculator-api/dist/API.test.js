/**
 * API Tester file, to test just simply type "jest" or "npm run test" in the cmd
 * @author Yunhao Cao (https://github.com/ToiletCommander)
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as APILib from './index';
//adds a new test to jest, named "Get defaults and results api"
test("Get defaults and results api", function () {
    //initialize api caller class
    var caller = new APILib.GET_DEFAULTS_AND_RESULTS_API();
    //this is an asynchronous test so we return the promise object to jest
    return caller.callAPI({
        input_income: APILib.RawAPIHouseHoldIncomeType.Average,
        input_location: "94704",
        input_location_mode: APILib.RawAPIInputLocationModeType.ZipCode,
        input_size: APILib.RawAPIHouseHoldSizeType.Average
    }).then(function (value) {
        APILib.rawInputParamNames.forEach(function (key) {
            expect(value).toHaveProperty(key);
        });
        APILib.rawResponseParamNames.forEach(function (key) {
            expect(value).toHaveProperty(key);
        });
    });
});
//Initialize a failed case test for the "get defaults and results" api
test("Wrong address with defaults and results api", function () { return __awaiter(void 0, void 0, void 0, function () {
    var caller;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                caller = new APILib.GET_DEFAULTS_AND_RESULTS_API();
                /** We are still using asynchronous calls,
                 * but notice that the syntax here is a bit different,
                 * remember both of them works! Read about JEST docs!
                 */
                return [4 /*yield*/, expect(caller.callAPI({
                        input_income: APILib.RawAPIHouseHoldIncomeType.Average,
                        input_location: "94704LALALALA",
                        input_location_mode: APILib.RawAPIInputLocationModeType.County,
                        input_size: APILib.RawAPIHouseHoldSizeType.Four
                    })).rejects.toThrow("Location not found")];
            case 1:
                /** We are still using asynchronous calls,
                 * but notice that the syntax here is a bit different,
                 * remember both of them works! Read about JEST docs!
                 */
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=API.test.js.map