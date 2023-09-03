import { Data } from "../types/data";
import { getDateAtWeek } from "../dataFlow/processGhostTypes";
import meta from "./meta";

export default function generateData() :Data{
    return {
        config: {
            showWeekend: false,
            startWeek: getDateAtWeek(),
            weeksInTerm: 20,
            startWeekAtSunday: false,
            locked: false,
            minWidth: 0,
            showOtherWeeks: false,
            version: meta.version
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