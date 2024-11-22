import React, { Component as Cp } from "react";
import styles from "./Timetable.module.css";
import { Data } from "../types/data";
import NavBar from "./NavBar/NavBar";
import WeekdayBar from "./WeekdayBar/WeekdayBar";
import { ConfigProvider, TimePicker, theme } from "antd";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import localforage from "localforage";

/**@once*/
export default class Timetable extends Cp<Data, Data>{

    constructor(props :Data){
        super(props);
        this.state = props;
    }

    //更新状态并保存
    update = async (newData :Data)=>{
        this.setState(newData, ()=>{
            localforage.setItem("data", this.state);
        });
    }

//#region 生命周期钩子
    componentDidMount(){

    }
    componentDidUpdate(){
        
    }
    componentWillUnmount(){

    }
//#endregion

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
                        currentWeek={this.state.state.currentWeek}
                        weeksInTerm={this.state.config.weeksInTerm}
                        updateCurrentWeek={(newValue :number)=>{
                            this.setState({state: {currentWeek: newValue}});
                        }}
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
                                    data={this.state}
                                    update={this.update}
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
                                        <td><TimePicker.RangePicker format={"H:mm"} separator={"-"} placeholder={["开始", "结束"]} /></td>
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