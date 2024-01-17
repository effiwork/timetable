import styles from "./DayTitle.module.css";
import { Immutable } from "immer";
import { getDayDescription } from "../../dataSource/enums";
import { getDate } from "../../utils";

type Props = Immutable<{
    currentWeek_Date :DateAtWeek;
    dayIndex :number;
    weekendShowed :boolean;
    startAtSunday :boolean;
}>;

export default function DayTitle(props :Props){
    const
        { currentWeek_Date, dayIndex, weekendShowed, startAtSunday } = props,
        [date, crossYear] = getDate(currentWeek_Date, dayIndex);
    let result;
    /* 根据 LJM12914时间表示标准（LS-7），我们需要在新年的第一个显示天前加上这一年的年份
     * 首先判定新年：1月或12月且存在跨年即为新年
     * 然后判定是否为这个实例是否是第一个显示新年日期的实例，限于条件只能通过纯日期方式判定，已经传入两个UI参数
     * 一共有三种UI形式：1、1-5；2、1-7；3、7-6（dayNumber）
     * 第二、三种形式，因为所有的日期都被显示了，那么1月1日一定会被显示，则只要在1月1日显示年份，从date中获取日期更简单
     * 第一种形式比较复杂，首先1月1日如果有，那么第一个肯定就是1月1日了
     * 然后考虑1月1日没有被显示的情况，当1月1日在上周六或日且这个实例是周一时就是第一个
     * 确定1月1日是上周六或日的方式是：使用这一周周一的date对象，如果它是1.2或1.3，那么1月1日就在上周六日
     */
    if(
        (
            currentWeek_Date.getMonth() === 0
         || (
                currentWeek_Date.getMonth() === 11
             && crossYear
            )
        )
     && (
            (
                !weekendShowed
             && (
                    date === "1.1"
                 || (
                        (
                            currentWeek_Date.getDate() === 2
                         || currentWeek_Date.getDate() === 3
                        )
                     && dayIndex === 1
                    )
                )
            )
         || weekendShowed && date.split(".")[1] === "1"
        )
    ) result = `${currentWeek_Date.getFullYear()}.${date}`;
    else result = date;
    return(
        <th className={styles.title}>
            <div>{getDayDescription(dayIndex)}</div>
            <div>{result}</div>
        </th>
    );
}