import React, { Component as Cp, useState } from "react";
import commonStyles from "./SettingItems.module.css";
import styles from "./Button.module.css";
import mainStyles from "../../../css/main.module.css";

type Props = {
    description :React.ReactNode;
    title :string;
    func :(e :React.MouseEvent)=>void;
    disabled? :boolean;
};
export default function Button(props :Props){
    return(
        <div style={{cursor: "revert"}} className={`${commonStyles.wrapperOut} ${mainStyles.noselect}`}>
            <div style={{cursor: "revert"}} className={commonStyles.wrapperIn}>
                <div className={commonStyles.title}>{props.title}</div>
                <div className={commonStyles.description}>{props.description}</div>
            </div>
            <div className={styles.activeWrapper}>
                <button disabled={props.disabled || false} className={styles.button} onClick={props.func}>{props.title}</button>
            </div>
        </div>
    );
}