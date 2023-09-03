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
    render() :React.ReactNode{
        return(
            <div className={styles.wrapper}>
                <h5>学期信息</h5>
                <WeekRange
                    title="学期开始与结束"
                    description="选择学期的开始周与结束周。手动输入格式：<年份>-<周数>周"
                />
                <NumberInput
                    title="…或者输入周数"
                    description="输入后将自动更新结束周，开始周不变"
                />
                <h5>课程安排<small>请在主界面调整各课程时间。</small></h5>
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
                <h5>显示</h5>
                <Switch
                    id="show-weekend"
                    title="显示周末"
                    description="会使得周程表布局更窄。"
                    checked={this.props.showWeekend}
                />
                <Switch
                    id="start-at-sunday"
                    title="从周日开始一周"
                    description="必须显示周末才会有效。"
                    checked={this.props.startWeekAtSunday}
                />
                <Switch
                    id="show-other-weeks"
                    title="隐藏不在本周上课的课程"
                    description="隐藏后将无法高效编辑课程，但便于查看课程，可在完成编辑后打开。"
                    checked={false}
                />
                <NumberInput
                    title="横向布局最小宽度"
                    description="用于在手机上滑动查看而不是被迫看很窄的页面。设为 0 以跟随浏览器宽度。一般在 400 像素或以上才有效果。"
                    addonAfter="px"
                />
                <h5>数据</h5>
                <Button title="导出所有数据" description="将您的数据和设置全部下载为 JSON 文件。强烈建议定期备份。" />
                <Button title="导入数据" description="请先在上面备份再导入。导入不同版本的可能出现不兼容问题。" />
                <h5>软件</h5>
                <Switch
                    id="lock-data"
                    title="锁定主页面"
                    description="将防止对主页面的误编辑，可在完成编辑后打开。"
                    checked={false}
                />
                <Switch
                    id="offline-mode"
                    title="启用离线模式"
                    description="启用后将仅使用已下载的资源，可节省流量、加快打开速度，但必须关闭才能接收最新更新。"
                    checked={false}
                />
                <Switch
                    id="notification"
                    title="启用通知"
                    description="在每节课前通过浏览器通知您，不需要保持此页面开启。需要 PC 端浏览器或移动端 Chrome 浏览器。第一次打开请在浏览器弹窗中点击“允许”以授权本软件发送通知。"
                    checked={false}
                />
                <div>当前数据结构版本：{meta.version}</div>
                <div>当前软件版本：{meta.std_version}</div>
            </div>
        );
    }
}