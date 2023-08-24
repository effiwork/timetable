import React, { Component as Cp } from "react";
import styles from "./Day.module.css";
import { LessonsInADay } from "../types/lesson";
import { Weekday } from "../dataSource/enums";
import { Immutable } from "immer";

type Props = Immutable<{
    day :Weekday;
    dayData :LessonsInADay;
}>;
export default class Day extends Cp<Props>{
    render() :React.ReactNode{
        return(
            <div>
                <div className={styles.title}>{this.props.day}</div>
                <div></div>
            </div>
        );
    }
}