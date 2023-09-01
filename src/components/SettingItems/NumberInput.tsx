﻿import React, { Component as Cp } from "react";
import commonStyles from "./SettingItems.module.css";
import styles from "./NumberInput.module.css";
import mainStyles from "../../css/main.module.css";

type Props = {
    id: string;
    description: string;
    title: string;
};
export default class NumberInput extends Cp<Props>{
    render() :React.ReactNode{
        return(
            <div className={`${styles.wrapperOut} ${mainStyles.noselect}`}>
                <label className={styles.wrapperIn} htmlFor={`settings-${this.props.id}`}>
                    <div className={styles.title}>{this.props.title}</div>
                    <div className={styles.description}>{this.props.description}</div>
                </label>
                <div className={styles.activeWrapper}>
                    <input type="number" />
                </div>
            </div>
        );
    }
}