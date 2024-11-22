import React, { Component as Cp } from "react";
import commonStyles from "./SettingItems.module.css";
import styles from "./WeekRange.module.css";
import mainStyles from "../../../css/main.module.css";
import { DatePicker } from "antd";

type Props = {
    description :React.ReactNode;
    title :string;
    //onChange :(values :RangeValue<dayjs.Dayjs>) => void;
};
export default function WeekRange(props :Props){
    return(
        <label className={`${commonStyles.wrapperOut} ${mainStyles.noselect}`}>
            <div className={commonStyles.wrapperIn}>
                <div className={commonStyles.title}>{props.title}</div>
                <div className={commonStyles.description}>{props.description}</div>
            </div>
            <div className={styles.activeWrapper}>
                <DatePicker.RangePicker picker="week" placeholder={["",""]} onChange={(values, format)=>{
                    console.log(values, format);
                }} />
            </div>
        </label>
    );
}