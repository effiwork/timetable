import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import "./css/main.scrollbar.css";
import "./css/main.varibles.css";
import "./css/main.basicElements.css";
import Timetable from "./components/Timetable";
import { getData } from "./dataFlow/getData";

const root = ReactDOM.createRoot(document.getElementById("root")!);
export async function reload(){
    const data = await getData()
    console.warn(data);
    root.render(<React.StrictMode><Timetable data={data} key={Date.now()} /></React.StrictMode>);
}
reload();

//DEV ONLY
Object.defineProperty(window, "重新加载_访问即触发", {
    get(){
        return reload();
    }
})