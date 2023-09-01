import React, { Component as Cp } from "react";
import commonStyles from "./SettingItems.module.css";
import styles from "./Switch.module.css";
import mainStyles from "../../css/main.module.css";
import * as Switch6 from "@radix-ui/react-switch";

type Props = {
    id: string;
    description: string;
    title: string;
};
export default class Switch extends Cp<Props>{
    render() :React.ReactNode{
        return(
            <div className={`${commonStyles.commonWrapperOut} ${styles.wrapperOut} ${mainStyles.noselect}`}>
                <label className={styles.wrapperIn} htmlFor={`settings-${this.props.id}`}>
                    <div className={commonStyles.title}>{this.props.title}</div>
                    <div className={commonStyles.description}>{this.props.description}</div>
                </label>
                <div className={styles.activeWrapper}>
                    <Switch6.Root className={styles.root} id={`settings-${this.props.id}`}>
                        <Switch6.Thumb className={styles.thumb} />
                    </Switch6.Root>
                </div>
            </div>
        );
    }
}