import React, { Component as Cp } from "react";
import styles from "./Day.module.css";
import { LessonsInADay } from "../types/lesson";
import { Weekday } from "../dataSource/enums";
import { Immutable } from "immer";
import { getDate } from "../utils";

type Props = Immutable<{
    weekDate :DateAtWeek;
    dayNumber :number;
    day :Weekday;
    dayData :LessonsInADay;
}>;
export default class Day extends Cp<Props>{
    render() :React.ReactNode{
        return(
            <div>
                <div className={styles.title}>
                    <div>{this.props.day}</div>
                    <div>{getDate(this.props.weekDate, this.props.dayNumber)}</div>
                </div>
                <hr />
            </div>
        );
    }
}