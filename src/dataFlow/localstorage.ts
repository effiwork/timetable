import { Data } from "../types/data";
import validateData from "./validateData";

export function getDataFromLocalStorage() :Data{
    const lsData = localStorage.getItem("data");
    return validateData(lsData);
}