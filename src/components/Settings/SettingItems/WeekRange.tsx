import React, { Component as Cp } from "react";
import commonStyles from "./SettingItems.module.css";
import styles from "./WeekRange.module.css";
import mainStyles from "../../../css/main.module.css";
import { DatePicker } from "antd";

type Props = {
    description :React.ReactNode;
    title :string;
};
export default class WeekRange extends Cp<Props>{
    render() :React.ReactNode{
        return(
            <label className={`${commonStyles.wrapperOut} ${mainStyles.noselect}`}>
                <div className={commonStyles.wrapperIn}>
                    <div className={commonStyles.title}>{this.props.title}</div>
                    <div className={commonStyles.description}>{this.props.description}</div>
                </div>
                <div className={styles.activeWrapper}>
                    <DatePicker.RangePicker picker="week" placeholder={["",""]} />
                </div>
            </label>
        );
    }
}