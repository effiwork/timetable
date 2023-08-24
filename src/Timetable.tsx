import React, { Component as Cp } from "react";
import { Data } from "./types/data";
import Day from "./Day/Day";
import Timeline from "./Timeline/Timeline";
import { Weekday } from "./dataSource/enums";
import WeekSwitch from "./WeekSwitch/WeekSwitch";
import { updateData } from "./dataFlow/getData";
import { produce } from "immer";

type Props = {
    data :Data;
    updateData :(newData :Data)=>void;
};
/**@once*/
export default class Timetable extends Cp<Props>{
    private incrementWeek = ()=>{
        updateData(produce(this.props.data, draft=>{
            draft.ini_state.currentWeek++;
        }));
    }
    private decrementWeek = ()=>{
        updateData(produce(this.props.data, draft=>{
            draft.ini_state.currentWeek--;
        }));
    }
    private setWeek = (week :number)=>{
        updateData(produce(this.props.data, draft=>{
            if(week > draft.config.weeksInTerm) draft.ini_state.currentWeek = draft.config.weeksInTerm;
            else if(week < 1) draft.ini_state.currentWeek = 1;
            else draft.ini_state.currentWeek = week;
        }));
    }
    render() :React.ReactNode{
        return(<>
            <WeekSwitch currentWeek={this.props.data.ini_state.currentWeek} incrementWeek={this.incrementWeek} decrementWeek={this.decrementWeek} setWeek={this.setWeek} />
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
                    this.props.data.config.startWeekAtSunday ? <Day day={Weekday.Sunday} dayData={this.props.data.lessons[6]} /> : null
                }
                <Day day={Weekday.Monday} dayData={this.props.data.lessons[0]} />
                <Day day={Weekday.Tuesday} dayData={this.props.data.lessons[1]} />
                <Day day={Weekday.Wednesday} dayData={this.props.data.lessons[2]} />
                <Day day={Weekday.Thursday} dayData={this.props.data.lessons[3]} />
                <Day day={Weekday.Friday} dayData={this.props.data.lessons[4]} />
                {
                    this.props.data.config.showWeekend ?
                        this.props.data.config.startWeekAtSunday ? 
                            <Day day={Weekday.Saturday} dayData={this.props.data.lessons[5]} />
                        : <>
                            <Day day={Weekday.Saturday} dayData={this.props.data.lessons[5]} />
                            <Day day={Weekday.Sunday} dayData={this.props.data.lessons[6]} />
                        </>
                    : null
                }
            </div>
        </>);
    }
}