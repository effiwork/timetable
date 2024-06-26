﻿import React, { Component as Cp } from "react";
import commonStyles from "./Dialog.module.css";
import styles from "./SettingDialog.module.css";
import mainStyles from "../../css/main.module.css";
import { GearIcon, Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import SettingSection from "../Settings/SettingSection";
import { Data } from "../../types/data";


/**@once 但鉴于东西太多还是把css放到外面去了*/
export default class SettingDialog extends Cp<Data>{
    render() :React.ReactNode{
        return(
            <Dialog.Root>
                <Dialog.Trigger asChild className={commonStyles.trigger}>
                    <div title="设置" aria-describedby="单击打开设置对话框。">
                        <GearIcon width={"1.5rem"} height={"1.5rem"} />
                    </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className={commonStyles.overlay} />
                    <Dialog.Content
                        className={`${commonStyles.content} ${mainStyles.noselect}`}
                        onPointerDownOutside={event=>{event.preventDefault();}}
                        onEscapeKeyDown={event=>{event.preventDefault();}}
                        aria-describedby="单击“保存并应用”以保存。单击“×”以取消。"
                    >
                        <Dialog.Title className={commonStyles.title}>设置</Dialog.Title>
                        <SettingSection {...this.props} />
                        <Dialog.Close><Cross2Icon className={styles.close} /></Dialog.Close>
                        <Dialog.Close className={`${styles.saveButton} ${mainStyles.noselect}`}>保存并应用</Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        );
    }
}