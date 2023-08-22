import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import "./css/main.scrollbar.css";
import "./css/main.varibles.css";
import "./css/main.basicElements.css";
import Timetable from "./Timetable";
import { decodeParam } from "./data/processParam";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<React.StrictMode><Timetable /></React.StrictMode>);
if(window.location.search){
    const expectedParam = window.location.search.substring(1).split("&").find((value :string)=>value && value.split("=")[0] === "d");
    if(expectedParam) decodeParam(expectedParam);
}