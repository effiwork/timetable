import React, { Component as Cp } from "react";
import styles from "./Timetable.module.css";
import { Data } from "../types/data";
import NavBar from "./NavBar/NavBar";
import { updateData } from "../dataFlow/getData";
import { produce } from "immer";
import WeekdayBar from "./WeekdayBar/WeekdayBar";
import { ConfigProvider, TimePicker, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import "dayjs/locale/zh-cn";

type Props = {
    data :Data;
};
/**@once*/
export default class Timetable extends Cp<Props>{
    private incrementWeek = ()=>{
        updateData(produce(this.props.data, draft=>{
            if(draft.state.currentWeek < draft.config.weeksInTerm) draft.state.currentWeek++;
        }));
    }
    private decrementWeek = ()=>{
        updateData(produce(this.props.data, draft=>{
            if(draft.state.currentWeek > 1) draft.state.currentWeek--;
        }));
    }
    private setWeek = (week :number)=>{
        updateData(produce(this.props.data, draft=>{
            draft.state.currentWeek = week;
        }));
    }
    patchTimepickerText = ()=>{
        const timepickers = document.querySelectorAll("[placeholder=开始时间], [placeholder=结束时间]") as unknown as HTMLInputElement[];
        for(let i = 0; i < timepickers.length; i++) timepickers[i].placeholder = timepickers[i].placeholder.substring(0, 2);
    }
    componentDidMount = this.patchTimepickerText;
    componentDidUpdate = this.patchTimepickerText;
    render() :React.ReactNode{
        const t = "transparent";
        return(
            <ConfigProvider
                locale={zhCN}
                theme={{
                    token: {
                        colorPrimary: "#2383E2",
                        colorBgElevated: "var(--c-grey--4)",
                        colorBgContainer: "var(--c-grey--4)",
                        colorBorder: "var(--c-main)"
                    },
                    algorithm: theme.darkAlgorithm
                }}
            >
                <div className={styles.main}>
                    <NavBar
                        maxWeek={this.props.data.config.weeksInTerm}
                        currentWeek={this.props.data.state.currentWeek}
                        incrementWeek={this.incrementWeek}
                        decrementWeek={this.decrementWeek}
                        setWeek={this.setWeek}
                    />
                    <div style={{
                        overflowY: "auto",
                        overflowX: "clip",
                        height: "calc(100dvh - 1.5rem - .5rem - 1rem)"
                    }}>
                        <table style={{
                            width: "100dvw",
                            borderCollapse: "collapse",
                            tableLayout: "fixed"
                        }}>
                            <colgroup>
                                <col className={styles.timeline} />
                            </colgroup>
                            <tbody>
                                <WeekdayBar
                                    config={this.props.data.config}
                                    currentWeek={this.props.data.state.currentWeek}
                                />
                                <ConfigProvider theme={{
                                    components: {
                                        DatePicker: {
                                            paddingLG: 0,
                                            paddingMD: 0,
                                            paddingSM: 0,
                                            borderRadius: 0,
                                            colorBorder: t,
                                            hoverBorderColor: t,
                                            activeBorderColor: t,
                                            activeShadow: t,
                                            boxShadow: t,
                                            errorActiveShadow: t,
                                            warningActiveShadow: t,
                                        }
                                    }
                                }}>
                                    <tr>
                                        <td><TimePicker.RangePicker format={"H:mm"} separator={"-"} /></td>
                                    </tr>
                                </ConfigProvider>
                            </tbody>
                        </table>
                    </div>
                </div>
            </ConfigProvider>
        );
    }
}