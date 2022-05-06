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

import { RawGetDefaultAPIInput, RawInput, RawInputParamNames, rawInputParamNames, RawResponse, RawResponseParamNames, rawResponseParamNames } from "./APIRawTypes";
import APISkeleton from "./APISkeleton";

// OK, so we know both of the RAW APIs return XMLs that contains both inputs and results tags
const joinedReturnParamNames = (rawInputParamNames as (RawInputParamNames | RawResponseParamNames)[]).concat(rawResponseParamNames);

export class GET_DEFAULTS_AND_RESULTS_API extends APISkeleton<RawGetDefaultAPIInput, RawInput & RawResponse>{
    callAPI(param: RawGetDefaultAPIInput): Promise<RawInput & RawResponse> {
        return this.autoParseCallAPI(
            false,
            "https://coolclimate.berkeley.edu/calculators/household/api.php",
            Object.assign(
                {},
                param,
                {"op": "get_defaults_and_results"}
            ),
            undefined,
            joinedReturnParamNames
        );
    }
}


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

export class COMPUTE_FOOTPRINT_API extends APISkeleton<RawInput, RawInput & RawResponse>{
    callAPI(param: RawInput): Promise<RawInput & RawResponse> {
        return this.autoParseCallAPI(
            true,
            "https://coolclimate.berkeley.edu/calculators/household/api.php",
            Object.assign(
                {},
                param,
                {"op": "compute_footprint"}
            ),
            param,
            joinedReturnParamNames
        );
    }
}
