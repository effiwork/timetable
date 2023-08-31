import { DateAtWeek } from "./types/time";

export function getDate(weekDate :DateAtWeek, dayIndex :number) :string{
    const d = new Date(weekDate);
    //由于我们和发明JS的西方默认一周起始日不同，我们的DateAtWeek约定为周一凌晨0点（参见time.ts）
    //所以如果我们需要使用西方的dayIndex（参见enums.ts）来转换DateAtWeek，就必须先处理dayIndex
    //fixme:这是一个历史缺陷，如果有空可以考虑将DateAtWeek约定为周日凌晨
    //note:不需要考虑天数溢出，Date API自动处理进位问题
    if(dayIndex === 0) d.setDate(d.getDate() + 6);
    else d.setDate(d.getDate() + dayIndex - 1);
    return `${d.getMonth() + 1}.${d.getDate()}`;
}

export function getDateAtWeekByWeekNumber(startWeek :DateAtWeek, currentWeekNumber :number) :DateAtWeek{
    //console.log(startWeek, currentWeekNumber);
    const d = new Date(startWeek);
    //-1的原因是：第一周就从startWeek开始
    //这不是index（从0开始）而是number（从1开始），
    //这是第几周！和星期完全无关！只有星期才需要配合JS搞什么**Index！好好从1开始数不好吗？
    d.setTime(d.getTime() + (currentWeekNumber - 1) * 7 * 24 * 60 * 60 * 1000);
    //console.log(d);
    return d as DateAtWeek;
}