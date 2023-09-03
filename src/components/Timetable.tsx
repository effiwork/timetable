import React, { Component as Cp } from "react";
import { Data } from "../types/data";
import NavBar from "./NavBar/NavBar";
import { updateData } from "../dataFlow/getData";
import { produce } from "immer";
import WeekdayBar from "./WeekdayBar/WeekdayBar";
import { ConfigProvider, theme } from 'antd';
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
    render() :React.ReactNode{
        return(
            <ConfigProvider
                locale={zhCN}
                theme={{
                    token: {
                        colorPrimary: "#2383E2",
                        colorBgElevated: "var(--c-grey--4)",
                        colorBgContainer: "var(--c-grey--4)",
                    },
                    algorithm: theme.darkAlgorithm,
                    components: {
                    }
                }}
            >
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
                            <col style={{
                                width: "9rem"
                            }} />
                        </colgroup>
                        <tbody>
                            <WeekdayBar
                                config={this.props.data.config}
                                currentWeek={this.props.data.state.currentWeek}
                            />
                        </tbody>
                    </table>
                </div>
            </ConfigProvider>
        );
    }
}