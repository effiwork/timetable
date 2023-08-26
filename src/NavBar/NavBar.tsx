import React, { Component as Cp } from "react";
import styles from "./NavBar.module.css";
import mainStyles from "../css/main.module.css";
import { Immutable } from "immer";

type Props = Immutable<{
    incrementWeek :()=>void;
    decrementWeek :()=>void;
    /**在 `NavBar` 处进行范围检查。*/
    setWeek :(week :number)=>void;
    currentWeek :number;
    maxWeek :number;
}>;
type State = Immutable<{
    editing :boolean;
    currentWeek :number;
}>;
/**@once*/
export default class NavBar extends Cp<Props, State>{
    private ref = React.createRef<HTMLSpanElement>();
    constructor(props :Props){
        super(props);
        this.state = {
            editing: false,
            currentWeek: props.currentWeek
        };
    }
    private clickCB = ()=>{
        if(!this.state.editing) this.setState({editing: true}, ()=>{
            this.ref.current!.focus();
            getSelection()!.selectAllChildren(this.ref.current!);
            document.addEventListener("keypress", this.keyDoneCB);
        });
    }
    private keyDoneCB = (e :KeyboardEvent)=>{
        if(e.key === "Enter"){
            e.preventDefault();
            this.reset();
        }
    }
    private blurCB = ()=>{
        if(this.state.editing) this.reset();
    }
    private reset(){
        const setState_Report = (week :number)=>{
            this.setState({currentWeek: week});
            //好像必须我们自己干这活，React时不时会不干了
            this.ref.current!.innerText = week + "";
            this.props.setWeek(week);
        };
        this.setState({editing: false}, ()=>{
            document.removeEventListener("keypress", this.keyDoneCB);
            getSelection()!.empty();
            const newWeek = parseInt(this.ref.current!.innerText);
            //还原，这里React帮不了我们，我们自己干
            if(isNaN(newWeek)) this.ref.current!.innerText = this.state.currentWeek + "";
            else{
                if(newWeek > this.props.maxWeek){
                    setState_Report(this.props.maxWeek);
                }
                else if(newWeek < 1) setState_Report(1);
                else setState_Report(newWeek);
            }
        });
    }
    render() :React.ReactNode{
        const buttonStyle :React.CSSProperties = {
            cursor: "pointer",
            padding: "0 2rem"
        };
        return(
            <div className={mainStyles.noselect} style={{
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "center",
                margin: ".5rem 0 1rem",
                fontSize: "1.2rem"
            }}>
                <div style={buttonStyle} title="后退一周" onClick={this.props.decrementWeek}>←</div>
                <div style={{
                    margin: "0 2rem"
                }}>
                    <div
                        style={{
                            cursor: this.state.editing ? "text" : "pointer",
                            padding: "0 2rem"
                        }}
                        title="输入周数"
                        onClick={this.clickCB}
                        onBlur={this.blurCB}
                    >
                        第&nbsp;
                        <span
                            className={mainStyles.reselect}
                            ref={this.ref}
                            contentEditable={this.state.editing}
                            style={{
                                whiteSpace: "pre"
                            }}
                        >{this.state.currentWeek}</span>
                        &nbsp;周
                    </div>
                </div>
                <div style={buttonStyle} title="前进一周" onClick={this.props.incrementWeek}>→</div>
            </div>
        );
    }
}