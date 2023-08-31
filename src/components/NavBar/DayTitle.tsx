import React, { Component as Cp } from "react";
import styles from "./DayTitle.module.css";
import { DateAtWeek } from "../../types/time";
import { Immutable } from "immer";
import { getDayDescription } from "../../dataSource/enums";
import { getDate } from "../../utils";

type Props = Immutable<{
    currentWeek_Date :DateAtWeek;
    dayIndex :number;
}>;

export default class DayTitle extends Cp<Props>{
    render() :React.ReactNode{
        return(
            <td className={styles.title}>
                <div>{getDayDescription(this.props.dayIndex)}</div>
                <div>{getDate(this.props.currentWeek_Date, this.props.dayIndex)}</div>
            </td>
        );
    }
}