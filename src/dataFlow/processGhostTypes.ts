import { DateAtDay, DateAtWeek } from "../types/time";

export function getcolorString(input :string) :colorString | null{
    if(input.match(/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{8}|[0-9a-fA-F]{6})$/)) return input as unknown as colorString;
    else return null;
}

export function getTimeIndex(input :number) :TimeIndex{
    return input as unknown as TimeIndex;
}

export function getDateAtDay(input? :Date | DateAtDay | DateAtWeek) :DateAtDay{
    const result = input ? new Date(input) : new Date();
    result.setHours(0, 0, 0, 0);
    return result as unknown as DateAtDay;
}

export function getDateAtWeek(input? :Date | DateAtDay | DateAtWeek) :DateAtWeek{
    const result = input ? new Date(input) : new Date();
    //NB:周日getDay()是0……
    if(result.getDay() === 0) result.setDate(result.getDate() - 6);
    else result.setDate(result.getDate() - result.getDay() + 1);
    result.setHours(0, 0, 0, 0);
    return result as unknown as DateAtWeek;
}