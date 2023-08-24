import { LessonsInADay } from "./lesson";

interface Data{
    timestamp :number;
    config :{
        startWeek :DateAtWeek;
        weeksInTerm :number;
        showWeekend :boolean;
        startWeekAtSunday :boolean;
    };
    ini_state :State;
    lessonTemplates :{
        morning :TimeBlock[];
        afternoon :TimeBlock[];
        night :TimeBlock[];
    };
    lessons :[LessonsInADay, LessonsInADay, LessonsInADay, LessonsInADay, LessonsInADay, LessonsInADay, LessonsInADay];
}