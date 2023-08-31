import React, { Component as Cp } from "react";
import styles from "./SettingSection.module.css";
import SettingSwitch from "./SettingSwitch";
import SettingDate from "./SettingDate";

enum SettingTypes{
    switch = 0,
    date = 1
}
type SettingEntry = {
    title :string;
    id :string;
    description :string;
    type :SettingTypes;
};
const SettingEntries :SettingEntry[] = [
    {
        id: "offline-mode",
        title: "启用离线模式",
        description: "启用后将仅使用已下载的资源，可节省流量、加快打开速度，但必须关闭才能接收最新更新。",
        type: SettingTypes.switch
    },
    {
        id: "start-date",
        title: "开始日期",
        description: "",
        type: SettingTypes.date
    },
    {
        id: "start-at-sunday",
        title: "从周日开始一周",
        description: "必须显示周末才会有效。",
        type: SettingTypes.switch
    }
];
/**@once*/
export default class SettingSection extends Cp{
    render() :React.ReactNode{
        return(
            <div className={styles.wrapper}>
                {SettingEntries.map((value :SettingEntry)=>{
                    switch(value.type){
                        case SettingTypes.switch: return <SettingSwitch {...value} key={value.id} />
                        case SettingTypes.date: return <SettingDate {...value} key={value.id} />
                        
                    }
                })}
            </div>
        );
    }
}