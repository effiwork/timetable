import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import "./css/main.scrollbar.css";
import "./css/main.varibles.css";
import "./css/main.basicElements.css";
import "./css/main.antdFix.css";
import Timetable from "./components/Timetable";
import localforage from "localforage";
import generateData from "./dataSource/generateData";
import { Data } from "./types/data";
import meta from "./dataSource/meta";

localforage.config({
    description: "Timetable的数据存储库，请不要在没有完全理解各字段的情况下乱改数据，可能会出各种奇怪 Bug！",
    name: "Timetable",
    storeName: "data"
});

if("serviceWorker" in window.navigator) window.navigator.serviceWorker.register("serviceworker.js");
else if(await localforage.getItem("alerted-no-offline") === null){
    localforage.setItem("alerted-no-offline", true);
    alert("您的浏览器不支持离线使用本应用。");
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
export async function load(){
    let data = await localforage.getItem<Data>("data");
    if(data === null){ //生成新的数据
        const newData = generateData(meta.dev);
        await localforage.setItem("data", newData);
        data = newData;
    }
    //todo:自动升级数据版本
    if(window.innerWidth < 300 && data.config.minWidth === 0) window.alert("本应用建议用于大屏设备，您的设备可能无法正确使用。请考虑在设置（齿轮图标）中调整“横向布局最小宽度”到一个较大的值以滑动查看。")
    console.warn(data);
    root.render(<React.StrictMode><Timetable {...data} key={Date.now()} /></React.StrictMode>);
    return "重新加载完毕" as const;
}
load();

//DEV ONLY
if(meta.dev) Object.defineProperties(window, {
    "重新加载": {
        get(){
            return load();
        }
    },
    "删库跑路": {
        get(){
            localforage.clear();
            return 666;
        }
    }
});