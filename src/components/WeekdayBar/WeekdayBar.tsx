import React, { Component as Cp } from "react";
import styles from "./WeekdayBar.module.css";
import mainStyles from "../../css/main.module.css";
import { getDateAtWeekByWeekNumber } from "../../utils";
import DayTitle from "./DayTitle";
import SettingDialog from "../Dialogs/SettingDialog";
import AboutDialog from "../Dialogs/AboutDialog";
import { Data } from "../../types/data";
import { Immutable } from "immer";

type Props = {
    update :(newData :Data)=>void;
    data :Data;
}

type State = Immutable<{
    time :Date;
}>;

/**@once 但鉴于东西太多还是把css放到外面去了*/
export default class WeekdayBar extends Cp<Props, State>{
    constructor(props :Props){
        super(props);
        this.state = {
            time: new Date()
        };
    }

    timerID :number = -12914;
    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.setState({
                time: new Date()
            });
        }, 1000) as unknown as number;
    }
    componentWillUnmount(){
        if(this.timerID !== -12914) clearInterval(this.timerID);
    }

    render() :React.ReactNode{
        const currentWeek_Date = getDateAtWeekByWeekNumber(this.props.data.config.startWeek, this.props.data.state.currentWeek);
        return(
            <tr className={styles.tr}>
                <th className={`${mainStyles.noselect} ${styles.th}`}>
                    <div className={styles.menu}>
                        <AboutDialog />
                        <SettingDialog data={this.props.data} update={this.props.update} />
                    </div>
                    <div className={styles.time}>{`${this.state.time.getFullYear()}.${this.state.time.getMonth() + 1}.${this.state.time.getDate()} ${this.state.time.getHours()}:${(this.state.time.getMinutes() + "").padStart(2, "0")}`}</div>
                </th>
                {
                    this.props.data.config.startWeekAtSunday ? <DayTitle startAtSunday={this.props.data.config.startWeekAtSunday} weekendShowed={this.props.data.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={0}/> : null
                }
                <DayTitle startAtSunday={this.props.data.config.startWeekAtSunday} weekendShowed={this.props.data.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={1}/>
                <DayTitle startAtSunday={this.props.data.config.startWeekAtSunday} weekendShowed={this.props.data.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={2} />
                <DayTitle startAtSunday={this.props.data.config.startWeekAtSunday} weekendShowed={this.props.data.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={3} />
                <DayTitle startAtSunday={this.props.data.config.startWeekAtSunday} weekendShowed={this.props.data.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={4} />
                <DayTitle startAtSunday={this.props.data.config.startWeekAtSunday} weekendShowed={this.props.data.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={5} />
                {
                    this.props.data.config.showWeekend ?
                        this.props.data.config.startWeekAtSunday ? 
                            <DayTitle startAtSunday={this.props.data.config.startWeekAtSunday} weekendShowed={this.props.data.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={6} />
                        : <>
                            <DayTitle startAtSunday={this.props.data.config.startWeekAtSunday} weekendShowed={this.props.data.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={6} />
                            <DayTitle startAtSunday={this.props.data.config.startWeekAtSunday} weekendShowed={this.props.data.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={0} />
                        </>
                    : null
                }
            </tr>
        );
    }
}