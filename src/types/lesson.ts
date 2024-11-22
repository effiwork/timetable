import { LessonImportance } from "../dataSource/enums";
import { LessonLocation } from "../dataSource/enums";
import { LessonSubject } from "../dataSource/enums";

export interface Lesson{
    //#region 仅用户相关属性
        //fixme:除了name之外所有的东西都是可选的，mock结束后记得改回来
        name :string;
        //note:老师只需要一个就行，不需要单独追踪每个老师
        teachers :string;
        description :string;
        location :string;
        location_type :LessonLocation;
        subject :LessonSubject;
        importance :LessonImportance;
    //#endregion
    //#region 用户与程序共用属性
        /**所有的上课时间索引，即一天中第几节课需要上这门课。
         * 
         * 从0开始！！是Index！
        */
        time :TimeIndex[];
        /**记录需要上课的周数。
         * 
         * **这个数组的长度与 `Data.config.weeksInTerm` 一样。***/
        weeks? :boolean[];
        /**显示颜色，包含文字颜色和背景颜色，背景可以是一个渐变，详情见 `color.d.ts`
         * 
         * 不上的课程为灰色，无法更改*/
        color? :colorInstance;
    //#endregion
}