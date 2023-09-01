import React, { Component as Cp } from "react";
import styles from "./SettingSection.module.css";
import Switch from "../SettingItems/Switch";
import DateAtWeek from "../SettingItems/DateAtWeek";
import { SettingEntries, SettingEntry, SettingTypes } from "./SettingEntries";
import NumberInput from "../SettingItems/NumberInput";

/**@once*/
export default class SettingSection extends Cp{
    render() :React.ReactNode{
        return(
            <div className={styles.wrapper}>
                {SettingEntries.map((value :SettingEntry)=>{
                    switch(value.type){
                        case SettingTypes.switch: return <Switch {...value} key={value.id} />;
                        case SettingTypes.dateAtWeek: return <DateAtWeek {...value} key={value.id} />;
                        case SettingTypes.hr: return <hr key={value.id} />;
                        case SettingTypes.numberInput: return <NumberInput {...value} key={value.id} />
                    }
                })}
            </div>
        );
    }
}