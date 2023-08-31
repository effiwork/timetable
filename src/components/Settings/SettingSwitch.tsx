import React, { Component as Cp } from "react";
import styles from "./SettingSwitch.module.css";
import mainStyles from "../../css/main.module.css";
import * as Switch from "@radix-ui/react-switch";

type Props = {
    id: string;
    description: string;
    title: string;
};
export default class SettingSwitch extends Cp<Props>{
    render() :React.ReactNode{
        return(
            <div className={`${styles.wrapperOut} ${mainStyles.noselect}`}>
                <label className={styles.wrapperIn} htmlFor={`settings-${this.props.id}`}>
                    <div className={styles.title}>{this.props.title}</div>
                    <div className={styles.description}>{this.props.description}</div>
                </label>
                <div className={styles.activeWrapper}>
                    <Switch.Root className={styles.root} id={`settings-${this.props.id}`}>
                        <Switch.Thumb className={styles.thumb} />
                    </Switch.Root>
                </div>
            </div>
        );
    }
}