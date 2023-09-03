import { LessonsInADay } from "./lesson";
import { DateAtWeek, TimeBlock } from "./time";

export interface Data{
    config :{
        startWeek :DateAtWeek;
        weeksInTerm :number;
        showWeekend :boolean;
        startWeekAtSunday :boolean;
        locked :boolean;
        showOtherWeeks :boolean;
        minWidth :number;
        version :number;
    };
    state :{
        currentWeek :number;
    };
    lessonTemplates :{
        morning :TimeBlock[];
        afternoon :TimeBlock[];
        night :TimeBlock[];
    };
    lessons :[LessonsInADay, LessonsInADay, LessonsInADay, LessonsInADay, LessonsInADay, LessonsInADay, LessonsInADay];
}