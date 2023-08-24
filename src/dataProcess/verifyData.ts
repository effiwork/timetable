import Joi from "joi";
import generateData from "../data/generateData";
import { Data } from "../types/data";
import { validateDateAtWeek } from "../data/validateDate";

const schema = Joi.object({
    a :Joi.string().required(),

});
export default function verifyData(input :string | null) :Data{
    //如果不是合法JSON那么直接报错，我们不catch就可以让程序终止在这里
    //todo:给用户报错，而不是直接停止程序
    if(input === null) return generateData();
    const inputJSON = JSON.parse(input);
    //if()
    return {
        timestamp: 666,
        config: {
            showWeekend: true,
            startWeek: validateDateAtWeek(),
            weeksInTerm: 20,
            startWeekAtSunday: false,
        },
        ini_state: {
            currentWeek: 1,
        },
        lessons: [[], [], [], [], [], [], []],
        lessonTemplates:{
            morning: [],
            afternoon: [],
            night: []
        }
    };
}