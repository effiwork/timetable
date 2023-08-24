import { Data } from "../types/data";
import verifyData from "./verifyData";

export function getDataFromLocalStorage() :Data{
    const lsData = localStorage.getItem("data");
    return verifyData(lsData);
}