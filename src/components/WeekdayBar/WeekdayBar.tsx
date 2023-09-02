import React, { Component as Cp } from "react";
import styles from "./WeekdayBar.module.css";
import mainStyles from "../../css/main.module.css";
import { getDateAtWeekByWeekNumber } from "../../utils";
import { DateAtWeek } from "../../types/time";
import DayTitle from "./DayTitle";
import SettingDialog from "../Dialogs/SettingDialog";
import AboutDialog from "../Dialogs/AboutDialog";
import { Data } from "../../types/data";
import { SettingData } from "../Settings/SettingSection";

type Props = {
    config :SettingData;
    currentWeek :number;
};
type State = {
    time :Date;
};
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
        setInterval(()=>{
            this.setState({
                time: new Date()
            });
        }, 1000);
    }
    componentWillUnmount(){
        if(this.timerID !== -12914) clearInterval(this.timerID);
    }

    render() :React.ReactNode{
        const currentWeek_Date = getDateAtWeekByWeekNumber(this.props.config.startWeek, this.props.currentWeek);
        return(
            <tr className={styles.tr}>
                <td className={`${mainStyles.noselect} ${styles.td}`}>
                    <div className={styles.menu}>
                        <AboutDialog />
                        <SettingDialog {...this.props.config} />
                    </div>
                    <div className={styles.time}>{`${this.state.time.getFullYear()}.${this.state.time.getMonth() + 1}.${this.state.time.getDate()} ${this.state.time.getHours()}:${(this.state.time.getMinutes() + "").padStart(2, "0")}`}</div>
                </td>
                {
                    this.props.config.startWeekAtSunday ? <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={0}/> : null
                }
                <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={1}/>
                <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={2} />
                <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={3} />
                <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={4} />
                <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={5} />
                {
                    this.props.config.showWeekend ?
                        this.props.config.startWeekAtSunday ? 
                            <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={6} />
                        : <>
                            <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={6} />
                            <DayTitle startAtSunday={this.props.config.startWeekAtSunday} weekendShowed={this.props.config.showWeekend} currentWeek_Date={currentWeek_Date} dayIndex={0} />
                        </>
                    : null
                }
            </tr>
        );
    }
}