import { reload } from "..";
import { Data } from "../types/data";
import { getDataFromLocalStorage } from "./localstorage";
import decodeParam  from "./processParam";

let DataCache :Data, expireTime :number;
Object.defineProperty(window, "data", {
    get() :Data{
        return DataCache;
    }
});

export function getData() :Data{
    if(DataCache && Date.now() < expireTime) return DataCache;
    let result :Data;
    if(window.location.search){
        const expectedParam = window.location.search.substring(1).split("&").find((value :string)=>value && value.split("=")[0] === "d");
        if(expectedParam) result = decodeParam(expectedParam);
    }
    result = getDataFromLocalStorage();

    //处理缓存并返回
    DataCache = result;
    //一分钟
    expireTime = Date.now() + 1000 * 60;
    return result;
}

export function updateData(newData :Data) :void{
    DataCache = newData;
    localStorage.setItem("data", JSON.stringify(newData));
    console.log(newData, JSON.stringify(newData));
    reload();
}