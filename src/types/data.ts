import { Lesson } from "./lesson";

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
    lessonTemplates :[TimeBlock[], TimeBlock[], TimeBlock[]];
    lessons :[Lesson[], Lesson[], Lesson[], Lesson[], Lesson[], Lesson[], Lesson[]];
}