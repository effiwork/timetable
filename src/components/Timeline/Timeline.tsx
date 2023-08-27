import React, { Component as Cp } from "react";
import styles from "./Timeline.module.css";
import mainStyles from "../../css/main.module.css";

/**@once*/
export default class Timeline extends Cp{
    render() :React.ReactNode{
        return(
            <div>
                <div>
                    8:00 - 7:59
                </div>
                <div>
                    6:80 - 66:-24
                </div>
            </div>
        );
    }
}