import React, { Component as Cp } from "react";
import { Data } from "../types/data";
import NavBar from "./NavBar/NavBar";
import { updateData } from "../dataFlow/getData";
import { produce } from "immer";

type Props = {
    data :Data;
};
/**@once*/
export default class Timetable extends Cp<Props>{
    private incrementWeek = ()=>{
        updateData(produce(this.props.data, draft=>{
            if(draft.ini_state.currentWeek < draft.config.weeksInTerm) draft.ini_state.currentWeek++;
        }));
    }
    private decrementWeek = ()=>{
        updateData(produce(this.props.data, draft=>{
            if(draft.ini_state.currentWeek > 1) draft.ini_state.currentWeek--;
        }));
    }
    private setWeek = (week :number)=>{
        updateData(produce(this.props.data, draft=>{
            draft.ini_state.currentWeek = week;
        }));
    }
    render() :React.ReactNode{
        return(<>
            <NavBar maxWeek={this.props.data.config.weeksInTerm} currentWeek={this.props.data.ini_state.currentWeek} incrementWeek={this.incrementWeek} decrementWeek={this.decrementWeek} setWeek={this.setWeek} startWeekAtSunday={this.props.data.config.startWeekAtSunday} startWeek={this.props.data.config.startWeek} showWeekend={this.props.data.config.showWeekend} />
            {/*<div style={{
                display: "grid",
                grid: `auto-flow / repeat(${this.props.data.config.showWeekend ? 8 : 6}, 1fr)`,
                height: "100dvh",
                width: "100dvw",
                overflowX: "clip",
                overflowY: "auto",
                //gridTemplateAreas: renderGrid(this.props.data)
            }}>
                <Timeline />
            </div>*/}
            {}
        </>);
    }
}