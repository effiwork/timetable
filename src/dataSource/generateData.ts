import { Data } from "../types/data";
import { getDateAtWeek, getTimeIndex } from "../dataFlow/processGhostTypes";
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
            [
                {
                    name: "fogjivhrehf",
                    time: [getTimeIndex(0), getTimeIndex(1)]
                },
                {
                    name: "evrbthyuio",
                    time: [getTimeIndex(2)]
                }
            ], [], [], [], [], [], []
        ],
        lessonTemplates: {
            morning: [
                {
                    startTime: [7, 15],
                    endTime: [8, 0]
                },
                {
                    startTime: [8, 10],
                    endTime: [8, 55]
                },
                {
                    startTime: [9, 10],
                    endTime: [9, 40]
                }
            ],
            afternoon: [],
            night: []
        }
    };
}