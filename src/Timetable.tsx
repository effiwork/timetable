import React, { Component as Cp } from "react";
import { Data } from "./types/data";
import Day from "./Day/Day";
import Timeline from "./Timeline/Timeline";
import { Weekday } from "./dataSource/enums";
import NavBar from "./NavBar/NavBar";
import { updateData } from "./dataFlow/getData";
import { produce } from "immer";
import { getDateAtWeekByWeekOffset } from "./utils";

type Props = {
    data :Data;
    updateData :(newData :Data)=>void;
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
        const theWeek = getDateAtWeekByWeekOffset(this.props.data.config.startWeek, this.props.data.ini_state.currentWeek);
        return(<>
            <NavBar maxWeek={this.props.data.config.weeksInTerm} currentWeek={this.props.data.ini_state.currentWeek} incrementWeek={this.incrementWeek} decrementWeek={this.decrementWeek} setWeek={this.setWeek} />
            <div style={{
                display: "grid",
                grid: `auto-flow / repeat(${this.props.data.config.showWeekend ? 8 : 6}, 1fr)`,
                height: "100dvh",
                width: "100dvw",
                overflowX: "clip",
                overflowY: "auto",
            }}>
                <Timeline />
                {
                    this.props.data.config.startWeekAtSunday ? <Day weekDate={theWeek} day={Weekday.Sunday} dayNumber={7} dayData={this.props.data.lessons[6]} /> : null
                }
                <Day weekDate={theWeek} day={Weekday.Monday} dayNumber={1} dayData={this.props.data.lessons[0]} />
                <Day weekDate={theWeek} day={Weekday.Tuesday} dayNumber={2} dayData={this.props.data.lessons[1]} />
                <Day weekDate={theWeek} day={Weekday.Wednesday} dayNumber={3} dayData={this.props.data.lessons[2]} />
                <Day weekDate={theWeek} day={Weekday.Thursday} dayNumber={4} dayData={this.props.data.lessons[3]} />
                <Day weekDate={theWeek} day={Weekday.Friday} dayNumber={5} dayData={this.props.data.lessons[4]} />
                {
                    this.props.data.config.showWeekend ?
                        this.props.data.config.startWeekAtSunday ? 
                            <Day weekDate={theWeek} day={Weekday.Saturday} dayNumber={6} dayData={this.props.data.lessons[5]} />
                        : <>
                            <Day weekDate={theWeek} day={Weekday.Saturday} dayNumber={6} dayData={this.props.data.lessons[5]} />
                            <Day weekDate={theWeek} day={Weekday.Sunday} dayNumber={7} dayData={this.props.data.lessons[6]} />
                        </>
                    : null
                }
            </div>
        </>);
    }
}