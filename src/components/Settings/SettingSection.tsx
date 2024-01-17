import React, { Component as Cp } from "react";
import styles from "./SettingSection.module.css";
import { Data } from "../../types/data";
import Switch from "./SettingItems/Switch";
import WeekRange from "./SettingItems/WeekRange";
import NumberInput from "./SettingItems/NumberInput";
import Button from "./SettingItems/Button";
import meta from "../../dataSource/meta";

export type SettingData = Data["config"];
/**@once*/
export default class SettingSection extends Cp<SettingData>{
    exportData = ()=>{
        console.log("导出");
    }
    importData = ()=>{
        console.log("导入");
    }
    resetSettings = ()=>{
        console.log("恢复设置");
    }
    resetData = ()=>{
        console.log("重置数据");
    }
    getScreenShot = ()=>{
        console.log("生成截图");
    }
    getCalendarData = ()=>{
        console.log("获取开始结束周");
    }
    getLessonData = ()=>{
        console.log("获取课程信息");
    }
    render() :React.ReactNode{
        return(
            <div className={styles.wrapper}>
                <h5>学期信息</h5>
                <Button disabled title="从校历获取" description="⛔【未开发】从四川大学教务处校历获取学期信息。必须处于一个学期前的假期或学期中，才能获取正确的学期。" func={this.getCalendarData} />
                <WeekRange
                    title="开始周与结束周"
                    description="选择学期的开始周与结束周。格式：<年份>-<周数>周"
                />
                <NumberInput
                    title="…或者输入学期总周数"
                    description="输入后将自动更新结束周，开始周不变"
                />
                <h5>课程安排<small className={styles.grey}>请在主界面调整各课程时间。</small></h5>
                <Button disabled title="从教务系统获取" description="⛔【未开发】ℹ️本软件使用<iframe>容器使您直接登录教务系统，无法获取您的账户信息；并已开源，欢迎审查。//从四川大学“智慧”教务系统获取个人课程信息。必须处于一个学期中才能获取正确的课程信息。" func={this.getLessonData} />
                <NumberInput
                    title="上午课程数"
                    description="从起床到午饭的课程数量，可能的最大值"
                />
                <NumberInput
                    title="下午课程数"
                    description="从午休到晚饭的课程数量，可能的最大值"
                />
                <NumberInput
                    title="晚上课程数"
                    description="从晚饭到晚休的课程数量，可能的最大值"
                />
                <h5>编辑与显示</h5>
                <Switch
                    id="lock-data"
                    title="锁定主页面"
                    description="将防止对主页面的误编辑，可在完成编辑后打开。"
                    checked={false}
                />
                <Switch
                    id="show-other-weeks"
                    title="隐藏不在本周上课的课程"
                    description="隐藏后将无法高效编辑课程，但便于查看课程，可在完成编辑后打开。"
                    checked={false}
                />
                <Switch
                    id="show-weekend"
                    title="显示周末"
                    description="会使得周程表布局更窄。可怜的周末有课人🥺"
                    checked={this.props.showWeekend}
                />
                <Switch
                    id="start-at-sunday"
                    title="从周日开始一周"
                    description="适合校历，必须显示周末才会有效。"
                    checked={this.props.startWeekAtSunday}
                />
                <NumberInput
                    title="横向布局最小宽度"
                    description="用于在手机上滑动查看而不是被迫看很窄的页面。设为 0 以跟随浏览器宽度。一般在 400 像素或以上才有效果。"
                    addonAfter="px"
                    min={200}
                />
                <h5>软件</h5>
                <Switch
                    id="offline-mode"
                    title="启用离线模式"
                    description="启用后将仅使用已下载的资源，可避免不兼容现象、加快打开速度。关闭以接收最新软件更新。"
                    checked={false}
                />
                <Switch
                    id="notification"
                    title="启用通知"
                    description="在每节课前通过浏览器通知您，不需要保持此页面开启，需要浏览器支持。第一次打开请在浏览器弹窗中点击“允许”以授权本软件发送通知。"
                    checked={false}
                />
                <h5>数据</h5>
                <Button title="清空数据" description="将输入的课程数据清空，可用于录入新学期课表" func={this.resetData} />
                <Button title="恢复默认设置" description="将所有设置恢复到默认状态，不包含输入的数据。" func={this.resetSettings} />
                <Button title="生成全屏截图" description="获取与您的设备屏幕大小相同的课表截图。" func={this.getScreenShot} />
                <Button title="导出所有数据" description="将您的数据和设置全部下载保存。强烈建议定期备份。" func={this.exportData} />
                <Button title="导入所有数据" description="⚠️导入数据将覆盖现有数据，请务必先备份再导入！⚠️导入不同版本的数据可能出现不兼容问题，此时建议手动输入。" func={this.importData} />
                <h5>调试信息</h5>
                <div className={styles.grey}>当前数据结构版本：{meta.version}</div>
                <div className={styles.grey}>当前软件版本：{meta.std_version}</div>
                <div>日志</div>
                <div><small className={styles.grey}></small></div>
            </div>
        );
    }
}