import React, { Component as Cp } from "react";
import commonStyles from "./SettingItems.module.css";
import styles from "./NumberInput.module.css";
import mainStyles from "../../../css/main.module.css";
import { InputNumber } from "antd";

type Props = {
    description: string;
    title: string;
    addonAfter? :string;
};
export default class NumberInput extends Cp<Props>{
    render() :React.ReactNode{
        return(
            <div className={`${commonStyles.commonWrapperOut} ${styles.wrapperOut} ${mainStyles.noselect}`}>
                <label className={styles.wrapperIn}>
                    <div className={commonStyles.title}>{this.props.title}</div>
                    <div className={commonStyles.description}>{this.props.description}</div>
                </label>
                <div className={styles.activeWrapper}>
                    <InputNumber min={0} size="middle" addonAfter={this.props.addonAfter} />
                </div>
            </div>
        );
    }
}