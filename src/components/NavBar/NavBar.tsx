import React, { Component as Cp } from "react";
import mainStyles from "../../css/main.module.css";
import styles from "./NavBar.module.css";
import { Immutable } from "immer";
import { Data } from "../../types/data";

type Props = {
    currentWeek :number;
    weeksInTerm :number;
    updateCurrentWeek :(newValue :number)=>void;
};

type State = Immutable<{
    editing :boolean;
}>;

/**@once*/
export default class NavBar extends Cp<Props, State>{
    constructor(props :Props){
        super(props);
        this.state = {
            editing: false
        };
    }
//#region 提交修改
    private incrementWeek = ()=>{
        if(this.props.currentWeek < this.props.weeksInTerm) this.props.updateCurrentWeek(this.props.currentWeek + 1);
    }
    private decrementWeek = ()=>{
        if(this.props.currentWeek > 1) this.props.updateCurrentWeek(this.props.currentWeek - 1);
    }
    private setWeek = (week :number)=>{
        if(week <= this.props.weeksInTerm && week > 1) this.props.updateCurrentWeek(week);
    }
//#endregion
//#region 编辑以跳转周数
    private ref = React.createRef<HTMLSpanElement>();
    private clickCB = ()=>{
        console.log("43");
        if(!this.state.editing) this.setState({editing: true}, ()=>{
            this.ref.current!.focus();
            getSelection()!.selectAllChildren(this.ref.current!);
            document.addEventListener("keypress", this.keyDoneCB);
        });
    }
    private keyDoneCB = (e :KeyboardEvent)=>{
        if(e.key === "Enter" && this.state.editing){
            e.preventDefault();
            this.reset();
        }
    }
    private blurCB = ()=>{
        //if(this.state.editing) this.reset();
    }
    private reset(){
        const setState_Report = (week :number)=>{
            //好像必须我们自己干这活，React时不时会不干了
            this.ref.current!.innerText = week + "";
            this.setWeek(week);
        };
        this.setState({editing: false}, ()=>{
            document.removeEventListener("keypress", this.keyDoneCB);
            getSelection()!.empty();
            const newWeek = parseInt(this.ref.current!.innerText);
            //还原，这里React帮不了我们，我们自己干
            if(isNaN(newWeek)) this.ref.current!.innerText = this.props.currentWeek + "";
            else{
                if(newWeek > this.props.weeksInTerm) setState_Report(this.props.weeksInTerm);
                else if(newWeek < 1) setState_Report(1);
                else setState_Report(newWeek);
            }
        });
    }
//#endregion

    render() :React.ReactNode{
        return(<div className={`${mainStyles.noselect} ${styles.container}`}>
            <div tabIndex={1} className={`${styles.button}${this.props.currentWeek === 1 ? ` ${styles.disabled}` : ""}`} title="后退一周" onClick={this.decrementWeek}>←</div>
            <div
                tabIndex={2}
                className={styles.weekNav}
                title="输入周数"
                onClick={this.clickCB}
                onBlur={this.blurCB}
                style={{
                    cursor: this.state.editing ? "text" : "pointer"
                }}
            >第
                <span
                    className={mainStyles.reselect}
                    ref={this.ref}
                    contentEditable={this.state.editing}
                    style={{
                        whiteSpace: "pre",
                        display: "inline-block",
                        textAlign: "center",
                        minWidth: "4rem"
                    }}
                >{this.props.currentWeek}</span>
            周</div>
            <div tabIndex={3} className={`${styles.button}${this.props.currentWeek === this.props.weeksInTerm ? ` ${styles.disabled}` : ""}`} title="前进一周" onClick={this.incrementWeek}>→</div>
        </div>);
    }
}