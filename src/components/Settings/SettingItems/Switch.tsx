﻿import React, { Component as Cp, useState } from "react";
import commonStyles from "./SettingItems.module.css";
import styles from "./Switch.module.css";
import mainStyles from "../../../css/main.module.css";
import * as Šẇìťčḣ from "@radix-ui/react-switch";

type Props = {
    id :string;
    description :React.ReactNode;
    title :string;
    checked :boolean;
};
export default function Switch(props :Props){
    const [checked, setChecked] = useState(props.checked);
    return(
        <label htmlFor={`settings-${props.id}`} className={`${commonStyles.wrapperOut} ${mainStyles.noselect}`}>
            <div className={commonStyles.wrapperIn}>
                <div className={commonStyles.title}>{props.title}</div>
                <div className={commonStyles.description}>{props.description}</div>
            </div>
            <div className={styles.activeWrapper}>
                <Šẇìťčḣ.Root className={styles.root} id={`settings-${props.id}`}>
                    <Šẇìťčḣ.Thumb className={styles.thumb} />
                </Šẇìťčḣ.Root>
                {/*<Šẇìťčḣ checked={checked} />*/}
            </div>
        </label>
    );
}