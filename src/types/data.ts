import { LessonsInADay } from "./lesson";
import { DateAtWeek, TimeBlock } from "./time";

//important:记得更新schema.ts
export interface Data{
    config :{
        startWeek :DateAtWeek;
        weeksInTerm :number;
        showWeekend :boolean;
        startWeekAtSunday :boolean;
    };
    ini_state :{
        currentWeek :number;
    };
    lessonTemplates :{
        morning :TimeBlock[];
        afternoon :TimeBlock[];
        night :TimeBlock[];
    };
    lessons :[LessonsInADay, LessonsInADay, LessonsInADay, LessonsInADay, LessonsInADay, LessonsInADay, LessonsInADay];
}