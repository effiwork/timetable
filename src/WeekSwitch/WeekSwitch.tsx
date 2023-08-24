import React, { Component as Cp } from "react";
import styles from "./WeekSwitch.module.css";
import mainStyles from "../css/main.module.css";
import { Immutable } from "immer";

type Props = Immutable<{
    incrementWeek :()=>void;
    decrementWeek :()=>void;
    setWeek :(week :number)=>void;
    currentWeek :number;
}>;
/**@once*/
export default class WeekSwitch extends Cp<Props>{
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
                lineHeight: "2rem",
                fontSize: "1.2rem",
                verticalAlign: "middle"
            }}>
                <div style={buttonStyle} title="后退一周">←</div>
                <div style={{
                    margin: "0 2rem"
                }}>
                
                    <div style={{
                        cursor: "pointer",
                        padding: "0 2rem"
                    }} title="跳转">第 {this.props.currentWeek} 周</div>
                </div>
                <div style={buttonStyle} title="前进一周">→</div>
            </div>
        );
    }
}