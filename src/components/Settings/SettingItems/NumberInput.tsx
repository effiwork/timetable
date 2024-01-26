import React, { Component as Cp, useState } from "react";
import commonStyles from "./SettingItems.module.css";
import styles from "./NumberInput.module.css";
import mainStyles from "../../../css/main.module.css";
import { InputNumber } from "antd";

type Props = {
    description :React.ReactNode;
    title :string;
    addonAfter? :string;
    min? :number;
    data :number;
};
export default function NumberInput(props :Props){
    const [number, setNumber] = useState(props.data);
    return(
        <label className={`${commonStyles.wrapperOut} ${mainStyles.noselect}`}>
            <div className={commonStyles.wrapperIn}>
                <div className={commonStyles.title}>{props.title}</div>
                <div className={commonStyles.description}>{props.description}</div>
            </div>
            <div className={styles.activeWrapper}>
                <InputNumber min={props.min || 0} size="middle" addonAfter={props.addonAfter} />
            </div>
        </label>
    );
}