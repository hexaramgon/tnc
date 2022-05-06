import API from "./../API";
import axios from 'axios';
import {DOMParser} from '@xmldom/xmldom';

/**
 * This class provides a skeleton for the raw API to process everything a lot more easier
 * Why? Remember the RAW API takes GET & Post Parameters concatenated by & signs and returns 
 * XML formats.
 * Writing this abstract class makes everything in our implemention (BackendRawAPI.ts) cleaner.
 * @author Yunhao Cao (https://github.com/ToiletCommander)
 */
abstract class APISkeleton<InputType extends {} | void, ReturnType extends {} | void> implements API<InputType,ReturnType>{
    
    //Passes down callAPI method to be implemented by actual implementations
    abstract callAPI(param: InputType): Promise<ReturnType>;
    
    //Hey, but here comes a helper deciding is a string is a valid number!
    static isNumeric(str : string) {
        if (typeof str != "string") return false // we only process strings!  
        return str !== undefined && str !== null && str.trim() === str && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
               !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }

    //This is another helper that helps us autodecides an input into either types of string, number, or undefined
    static autoDecide(str : string | null | undefined) : string | number | undefined{
        if(str === undefined || str == null){
            return undefined;
        }
        let trimmed = str.trim();
        if(this.isNumeric(trimmed)){
            return parseFloat(trimmed);
        }else{
            return str;
        }
    }

    /** 
     * This is the possibly most helpful helper, 
     * you can pass in get parameters, request bodies, and finally, required fields in response
     * and it will automatically GET / POST to the URL, parse the API for you into an JS Object
     * 
     * Note: Request bodies will be automatically discarded if we're not using POST (using GET)
     */
    protected autoParseCallAPI<R extends {}, G extends {[s:string]:any} | void, P extends {[s:string]:any} | void>(isPost : boolean, url : string, getParams : G, body : P, returnTagList : (keyof R)[]) : Promise<R>{
        if(getParams !== null && getParams !== undefined){
            url += "?";
            let and : boolean = false;
            for(let key in getParams){
                if(and){
                    url += "&";
                }else{
                    and = true;
                }
                url += encodeURIComponent(key) + "=" + encodeURIComponent(getParams[key as string]);
            }
        }
        let mReturn;
        if(isPost){
            mReturn = axios.post(url,body);
        }else{
            mReturn = axios.get(url);
        }
        return mReturn.then((res) => {
            let data = res.data;
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(data, 'text/html');

            let failedEle = xmlDoc.getElementsByTagName("failed");
            if(failedEle.length != 0 && failedEle[0].textContent !== null && failedEle[0].textContent.trim() == "1"){
                let textContent = xmlDoc.getElementsByTagName("error_message")[0].textContent;
                throw new Error(textContent == null ? undefined : textContent);
            }

            let retObj : any = {};
            returnTagList.forEach((tag) => {
                let allPossibleElements = xmlDoc.getElementsByTagName(tag as string);
                if(allPossibleElements.length > 0){
                    retObj[tag] = APISkeleton.autoDecide(
                        allPossibleElements[0].textContent
                    );
                }
            });

            return retObj as R;
        });
    }
}

export default APISkeleton;