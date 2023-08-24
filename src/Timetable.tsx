import React, { Component as Cp } from "react";
import { Data } from "./types/data";
import Day from "./Day/Day";
import Timeline from "./Timeline/Timeline";
import { Weekday } from "./data/data";
import WeekSwitch from "./WeekSwitch/WeekSwitch";
import { updateData } from "./dataProcess/getData";
import { Immutable, produce } from "immer";

type Props = Immutable<{
    data :Data;
    updateData :(newData :Data)=>void;
}>;
/**@once*/
export default class Timetable extends Cp<Props>{
    incrementWeek = ()=>{
        updateData(produce(this.props.data, draft=>{
            
        }));
    }
    decrementWeek = ()=>{

    }
    setWeek = (week :number)=>{

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