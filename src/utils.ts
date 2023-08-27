import { DateAtWeek } from "./types/time";

export function getDate(weekDate :DateAtWeek, day :number) :string{
    const d = new Date(weekDate);
    d.setDate(d.getDate() + day - 1);
    return `${d.getMonth() + 1}.${d.getDate()}`;
}
export function getDateAtWeekByWeekOffset(startWeek :DateAtWeek, weekOffset :number) :DateAtWeek{
    const d = new Date(startWeek);
    d.setTime(d.getTime() + weekOffset * 7 * 24 * 60 * 60 * 1000);
    return d as DateAtWeek;
}