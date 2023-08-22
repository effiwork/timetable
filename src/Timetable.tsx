import React, { Component as Cp } from "react";
import Day from "./Day/Day";

export default class Timetable extends Cp{
    render() :React.ReactNode{
        return(
            <div style={{
                display: "flex",
                flexFlow: "row nowrap",
                
            }}>
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
            </div>
        );
    }
}