import generateData from "../dataSource/generateData";
import { Data } from "../types/data";
import Data_, { please_delete_this } from "./schema";

export default function validateData(input :string | null) :Data{
    if(input === null) return generateData();
    let gotData;
    try{ gotData = JSON.parse(input); }
    catch(e :unknown){
        //todo:给用户报错
        console.error("JSON解析错误：", input, e);
        //fallback到自动生成的JSON
        gotData = generateData();
    }
    //暂时
    console.log(Data_.validate(gotData));
    return generateData();
}
please_delete_this();