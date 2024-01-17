import React, { Component as Cp } from "react";
import commonStyles from "./SettingItems.module.css";
import styles from "./NumberInput.module.css";
import mainStyles from "../../../css/main.module.css";
import { InputNumber } from "antd";

type Props = {
    description: string;
    title: string;
    addonAfter? :string;
    min? :number;
};
export default class NumberInput extends Cp<Props>{
    render() :React.ReactNode{
        return(
            <label className={`${commonStyles.wrapperOut} ${mainStyles.noselect}`}>
                <div className={commonStyles.wrapperIn}>
                    <div className={commonStyles.title}>{this.props.title}</div>
                    <div className={commonStyles.description}>{this.props.description}</div>
                </div>
                <div className={styles.activeWrapper}>
                    <InputNumber min={this.props.min || 0} size="middle" addonAfter={this.props.addonAfter} />
                </div>
            </label>
        );
    }
}