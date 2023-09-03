import { Data } from "../types/data";
import { getDateAtWeek } from "../dataFlow/processGhostTypes";

export default function generateData() :Data{
    return {
        config: {
            showWeekend: false,
            startWeek: getDateAtWeek(),
            weeksInTerm: 20,
            startWeekAtSunday: false
        },
        state: {
            currentWeek: 1,
        },
        lessons: [
            [], [], [], [], [], [], []
        ],
        lessonTemplates: {
            morning: [],
            afternoon: [],
            night: []
        }
    };
}