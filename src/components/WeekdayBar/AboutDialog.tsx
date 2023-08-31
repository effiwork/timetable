import React, { Component as Cp } from "react";
import styles from "./AboutDialog.module.css";
import commonStyles from "./Dialog.module.css";
import mainStyles from "../../css/main.module.css";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";


type State = {
    aboutOpened :boolean;
    downOnAboutOverlay :boolean;
};
/**@once 但鉴于东西太多还是把css放到外面去了*/
export default class AboutDialog extends Cp<{}, State>{
    constructor(props :{}){
        super(props);
        this.state = {
            aboutOpened: false,
            downOnAboutOverlay: false
        };
    }
    aboutRef :React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    about_pointerDownCB = (event :React.PointerEvent<HTMLDivElement>)=>{
        if(event.target === this.aboutRef.current!) this.setState({
            downOnAboutOverlay: true
        });
    }
    about_pointerUpCB = (event :React.PointerEvent<HTMLDivElement>)=>{
        if(event.target === this.aboutRef.current! && this.state.downOnAboutOverlay) this.setState({
            downOnAboutOverlay: false,
            aboutOpened: false
        });
    }
    about_pointerCancelCB = (event :React.PointerEvent<HTMLDivElement>)=>{
        if(event.target === this.aboutRef.current!) this.setState({
            downOnAboutOverlay: false
        });
    }
    render(): React.ReactNode {
        return(
            <Dialog.Root
                open={this.state.aboutOpened}
                onOpenChange={(open :boolean)=>{
                    this.setState({
                        aboutOpened: open
                    });
                }}
            >
                <Dialog.Trigger asChild className={commonStyles.trigger}>
                    <div title="关于">
                        <InfoCircledIcon width={"1.5rem"} height={"1.5rem"} />
                        <VisuallyHidden.Root>关于。单击打开关于对话框。</VisuallyHidden.Root>
                    </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay
                        className={commonStyles.overlay}
                        ref={this.aboutRef}
                        onPointerDown={this.about_pointerDownCB}
                        onPointerUp={this.about_pointerUpCB}
                        onPointerCancel={this.about_pointerCancelCB}
                    />
                    <Dialog.Content
                        className={commonStyles.content}
                        aria-describedby="单击对话框外部的遮盖层以关闭对话框。"
                        onPointerDownOutside={event=>{
                            event.preventDefault();
                        }}

                    >
                        <Dialog.Title className={commonStyles.title}>关于</Dialog.Title>
                        <div className={styles.aboutWrapper}>
                            <div className={styles.author}>作者：<img className={styles.authorImg} alt="LJM12914 的图标" src="https://www.ljm.im/avatar/512.png" />LJM12914</div>
                            <div>制作日期：2023.8.22-9.2</div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        );
    }
}