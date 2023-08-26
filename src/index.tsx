import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import "./css/main.scrollbar.css";
import "./css/main.varibles.css";
import "./css/main.basicElements.css";
import Timetable from "./Timetable";
import { getData, updateData } from "./dataFlow/getData";
import { Data } from "./types/data";

const root = ReactDOM.createRoot(document.getElementById("root")!);
(window as any).reload = reload;
export async function reload(){
    root.render(<React.StrictMode><Timetable data={await getData()} key={Date.now()} updateData={updateData} /></React.StrictMode>);
}
reload();