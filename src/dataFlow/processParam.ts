import { Data } from "../types/data";
import validateData from "./validateData";

export default function decodeParam(input :string) :Data{
    return validateData(window.atob(input));
}