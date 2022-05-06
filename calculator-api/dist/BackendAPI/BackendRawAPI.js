/**
 * This file contains RAW API Implementations (meaning a lot of parameter and return
 * types will be passed directly in and out of the server)
 * But still, it gives us a good basement to start and also enables code prompts in
 * the IDE, so thats not bad :)
 * It is still highly recommended for frontend packages to instead utilize the higher
 * order wrapped-up classes, to further decrease:
 *  1. dependability
 *  2. code complexity
 *  3. reuse of api definitions(e.g. 1 = small, 2 = medium, etc.) across multiple packages
 *
 * To see docs for those two APIs, look into the following page:
 * https://www.notion.so/Calculators-API-Back-end-ccd3d876d49043f89eb8420aedb773e8
 *
 * Other possible APIs to look into further(this version we are not using rn):
 * https://api-central.berkeley.edu/api/11/interactive-docs#/default/getDefaultFootprint
 *
 * @author Yunhao Cao (https://github.com/ToiletCommander)
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { rawInputParamNames, rawResponseParamNames } from "./APIRawTypes";
import APISkeleton from "./APISkeleton";
// OK, so we know both of the RAW APIs return XMLs that contains both inputs and results tags
var joinedReturnParamNames = rawInputParamNames.concat(rawResponseParamNames);
var GET_DEFAULTS_AND_RESULTS_API = /** @class */ (function (_super) {
    __extends(GET_DEFAULTS_AND_RESULTS_API, _super);
    function GET_DEFAULTS_AND_RESULTS_API() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GET_DEFAULTS_AND_RESULTS_API.prototype.callAPI = function (param) {
        return this.autoParseCallAPI(false, "https://coolclimate.berkeley.edu/calculators/household/api.php", Object.assign({}, param, { "op": "get_defaults_and_results" }), undefined, joinedReturnParamNames);
    };
    return GET_DEFAULTS_AND_RESULTS_API;
}(APISkeleton));
export { GET_DEFAULTS_AND_RESULTS_API };
// export class COMPUTE_FOOTPRINT_API extends APISkeleton<RawInput, RawInput & RawResponse>{
//     callAPI(param: RawInput): Promise<RawInput & RawResponse> {
//         return this.autoParseCallAPI(
//             true,
//             "https://coolclimate.berkeley.edu/calculators/household/api.php",
//             {"op": "compute_footprint"},
//             param,
//             joinedReturnParamNames
//         );
//     }
// }
var COMPUTE_FOOTPRINT_API = /** @class */ (function (_super) {
    __extends(COMPUTE_FOOTPRINT_API, _super);
    function COMPUTE_FOOTPRINT_API() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    COMPUTE_FOOTPRINT_API.prototype.callAPI = function (param) {
        return this.autoParseCallAPI(true, "https://coolclimate.berkeley.edu/calculators/household/api.php", Object.assign({}, param, { "op": "compute_footprint" }), param, joinedReturnParamNames);
    };
    return COMPUTE_FOOTPRINT_API;
}(APISkeleton));
export { COMPUTE_FOOTPRINT_API };
//# sourceMappingURL=BackendRawAPI.js.map