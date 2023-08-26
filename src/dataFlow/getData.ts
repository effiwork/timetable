import localforage from "localforage";
import { reload } from "..";
import { Data } from "../types/data";
import validateData from "./validateData";

let DataCache :Data, expireTime :number;

//DEV ONLY
Object.defineProperty(window, "data_仅供开发使用_只读_欢迎关注LJM12914_github$com$ljm12914", {
    get() :Data{
        return DataCache;
    }
});

export async function getData() :Promise<Data>{
    //Cache Hit
    if(DataCache && Date.now() < expireTime) return DataCache;

    //Cache Miss
    let result :Data;
    if(window.location.search !== ""){
        const expectedParam = new URL(window.location.href).searchParams.get("d");
        if(expectedParam){
            try{
                result = validateData(window.atob(expectedParam));
                clearSearch();
            }
            catch(e :unknown){
                //todo:提示用户
                console.error("输入参数错误:", expectedParam, e);
            }
        }
        else clearSearch(); //清除无用的search字符串
    }
    result = validateData(await localforage.getItem("data"));

    //处理缓存并返回
    DataCache = result;
    //一分钟
    expireTime = Date.now() + 1000 * 60;
    return result;
}

export function updateData(newData :Data) :void{
    DataCache = newData;
    localStorage.setItem("data", JSON.stringify(newData));
    //console.log(newData, JSON.stringify(newData));
    reload();
}

function clearSearch(){
    window.history.pushState(6, "", window.location.href.substring(0, window.location.href.indexOf("?")));
}