import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import "./css/main.scrollbar.css";
import "./css/main.varibles.css";
import "./css/main.basicElements.css";
import "./css/main.antdFix.css";
import Timetable from "./components/Timetable";
import { getData } from "./dataFlow/getData";

const root = ReactDOM.createRoot(document.getElementById("root")!);
export async function reload(){
    const data = await getData();
    //todo:自动升级数据版本
    if(window.innerWidth < 300 && data.config.minWidth === 0) window.alert("本应用建议用于大屏设备，您的设备可能无法正确使用。请考虑在设置（齿轮图标）中调整“横向布局最小宽度”到一个较大的值以滑动查看。")
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