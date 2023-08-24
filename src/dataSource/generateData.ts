import { Data } from "../types/data";
import { validateDateAtWeek } from "../dataFlow/validateDate";

export default function generateData() :Data{
    return {
        timestamp: Date.now(),
        config: {
            showWeekend: false,
            startWeek: validateDateAtWeek(),
            weeksInTerm: 20,
            startWeekAtSunday: false
        },
        ini_state: {
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