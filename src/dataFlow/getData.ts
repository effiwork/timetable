import localforage from "localforage";
import { reload } from "..";
import { Data } from "../types/data";
//import Data_ from "./schema";
import generateData from "../dataSource/generateData";

//DEV ONLY
Object.defineProperty(window, "data_仅供开发使用_只读_欢迎关注LJM12914_github$com$ljm12914", {
    async get() :Promise<Data | null>{
        return await localforage.getItem("data");
    }
});

export async function getData() :Promise<Data>{
    const result = await localforage.getItem("data");
    if(result === null){ //生成新的数据
        const newData = generateData();
        localforage.setItem("data", newData);
        //DEV ONLY
        //console.log("生成数据", Data_.validate(newData));
        return newData;
    }
    else{
        //const validateResult = Data_.validate(result);
        //note:一般这里不会出现任何问题，出问题再仔细debug一下
        //if(validateResult.error !== undefined){
        //    console.error(validateResult.error);
        //    throw new Error();
        //}
        return result as Data;
    }
}

export async function updateData(newData :Data){
    await localforage.setItem("data", newData);
    await reload();
}