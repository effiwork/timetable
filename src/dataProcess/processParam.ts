import { Data } from "../types/data";
import verifyData from "./verifyData";

export default function decodeParam(input :string) :Data{
    return verifyData(window.atob(input));
}