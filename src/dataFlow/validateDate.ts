export function validateDateAtDay(input? :Date | DateAtDay | DateAtWeek) :DateAtDay{
    const result = input ? new Date(input) : new Date();
    result.setHours(0, 0, 0, 0);
    return result as unknown as DateAtDay;
}
export function validateDateAtWeek(input? :Date | DateAtDay | DateAtWeek) :DateAtWeek{
    const result = input ? new Date(input) : new Date();
    result.setDate(result.getDate() - result.getDay() + 1);
    result.setHours(0, 0, 0, 0);
    return result as unknown as DateAtWeek;
}