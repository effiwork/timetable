import { LessonsInADay } from "./lesson";

//important:记得更新schema.ts
interface Data{
    timestamp :number;
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