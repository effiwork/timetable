﻿//important:记得更新schema.ts

interface TimeBlock{
    startTime :Time;
    endTime :Time;
}
interface TimeIndex extends number{
    主打的就是一个海纳百川有容乃大 :never;
}
type Time = [
    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59
];

/**幻影类型，用于保证日期的精度仅到某一天
 * 
 * **必须处于 `00:00:00`***/
interface DateAtDay extends Date{
    排核污染水日本不得好死 :never;
}
/**幻影类型，用于保证日期的精度仅到某一周
 * 
 * **必须处于星期一的 `00:00:00`，与在哪天开始一周无关***/
interface DateAtWeek extends Date{
    用户不存在或其原因 :never;
}