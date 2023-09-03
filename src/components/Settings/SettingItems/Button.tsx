import React, { Component as Cp, useState } from "react";
import commonStyles from "./SettingItems.module.css";
import styles from "./Button.module.css";
import mainStyles from "../../../css/main.module.css";

type Props = {
    description :string;
    title :string;
};
export default function Button(props :Props){
    return(
        <div className={`${commonStyles.commonWrapperOut} ${styles.wrapperOut} ${mainStyles.noselect}`}>
            <label className={styles.wrapperIn}>
                <div className={commonStyles.title}>{props.title}</div>
                <div className={commonStyles.description}>{props.description}</div>
            </label>
            <div className={styles.activeWrapper}>
                <button className={styles.button}>{props.title}</button>
            </div>
        </div>
    );
}