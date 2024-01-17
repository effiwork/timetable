import { Data } from "../types/data";
import { getDateAtWeek, getTimeIndex } from "../dataFlow/processGhostTypes";
import meta from "./meta";
import { LessonImportance, LessonLocation, LessonSubject } from "./enums";

export default function generateData() :Data{
    return{
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
                    name: "大学化学1-2",
                    description: "",
                    importance: LessonImportance.critical,
                    location: "一教A711",
                    location_type: LessonLocation.local,
                    subject: LessonSubject.engineering,
                    teachers: "few",
                    weeks: [],
                    time: [getTimeIndex(0), getTimeIndex(1)]
                },
                {
                    name: "微积分Ⅰ-1",
                    description: "",
                    importance: LessonImportance.critical,
                    location: "一教A711",
                    location_type: LessonLocation.local,
                    subject: LessonSubject.engineering,
                    teachers: "few",
                    weeks: [],
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