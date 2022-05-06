import API from "./../API";
/**
 * This class provides a skeleton for the raw API to process everything a lot more easier
 * Why? Remember the RAW API takes GET & Post Parameters concatenated by & signs and returns
 * XML formats.
 * Writing this abstract class makes everything in our implemention (BackendRawAPI.ts) cleaner.
 * @author Yunhao Cao (https://github.com/ToiletCommander)
 */
declare abstract class APISkeleton<InputType extends {} | void, ReturnType extends {} | void> implements API<InputType, ReturnType> {
    abstract callAPI(param: InputType): Promise<ReturnType>;
    static isNumeric(str: string): boolean;
    static autoDecide(str: string | null | undefined): string | number | undefined;
    /**
     * This is the possibly most helpful helper,
     * you can pass in get parameters, request bodies, and finally, required fields in response
     * and it will automatically GET / POST to the URL, parse the API for you into an JS Object
     *
     * Note: Request bodies will be automatically discarded if we're not using POST (using GET)
     */
    protected autoParseCallAPI<R extends {}, G extends {
        [s: string]: any;
    } | void, P extends {
        [s: string]: any;
    } | void>(isPost: boolean, url: string, getParams: G, body: P, returnTagList: (keyof R)[]): Promise<R>;
}
export default APISkeleton;
