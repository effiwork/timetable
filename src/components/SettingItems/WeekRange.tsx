import React, { Component as Cp } from "react";
import commonStyles from "./SettingItems.module.css";
import styles from "./WeekRange.module.css";
import mainStyles from "../../css/main.module.css";
import { DatePicker } from "antd";

type Props = {
    description: string;
    title: string;
};
export default class WeekRange extends Cp<Props>{
    render() :React.ReactNode{
        return(
            <div className={`${commonStyles.commonWrapperOut} ${mainStyles.noselect}`}>
                <label className={styles.wrapperIn}>
                    <div className={commonStyles.title}>{this.props.title}</div>
                    <div className={commonStyles.description}>{this.props.description}</div>
                </label>
                <DatePicker.RangePicker picker="week" placeholder={["",""]} />
            </div>
        );
    }
}