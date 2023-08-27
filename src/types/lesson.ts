import { LessonImportance } from "../dataSource/enums";
import { LessonLocation } from "../dataSource/enums";
import { LessonSubject } from "../dataSource/enums";
import { colorInstance } from "./color";

//important:记得更新schema.ts

export type LessonsInADay = Lesson[];

export interface Lesson{
    //#region 仅用户相关属性
        name :string;
        teachers :string;
        description :string;
        location :string;
        location_desc :LessonLocation;
        subject :LessonSubject;
        importance :LessonImportance;
    //#endregion
    //#region 用户与程序共用属性
        /**上课时间*/
        time :TimeIndex[];
        /**记录需要上课的周数。
         * 
         * **这个数组的长度与 `Data.config.weeksInTerm` 一样。***/
        weeks :boolean[];
        /**显示颜色，包含文字颜色和背景颜色，背景可以是一个渐变，详情见 `color.d.ts`
         * 
         * 不上的课程为灰色，无法更改*/
        color :colorInstance;
    //#endregion
}