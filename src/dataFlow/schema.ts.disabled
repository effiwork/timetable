import Joi, { Schema, bool } from "joi";
import { getDateAtWeek } from "./processGhostTypes";
import { Data } from "../types/data";
import { getTimeIndex, getcolorString as getColorString } from "./processGhostTypes";

const { string, object, number, array, boolean, date, alternatives } = Joi.types();


//???:fixme:怎么成required地狱了😅全是required
//Joi.js的文档真的又乱又卡


//#region 时间

const

    Time_ = array.length(2).ordered(
        number.min(0).max(23).required(),
        number.min(0).max(59).required()
    ),

    TimeBlock_ = object.keys({
        startTime: Time_.required(),
        endTime: Time_.required(),
    }),

    /**`TimeBlock[]`*/
    TimeBlock_$$_ = array.items(TimeBlock_);

//#endregion


const
    colorString = string.custom((value, helper)=>{
        return getColorString(value);
    }),
    colorInstance = array.ordered(
        colorString.required(),
        alternatives.try(
            colorString.required(),
            array.ordered(
                colorString.required(),
                colorString.required()
            ).required()
        ).required()
    );


//#region 课程

const

    Lesson_ = object.keys({
        name: string.required(),
        teachers: string.required(),
        description: string.required(),
        location: string.required(),
        location_desc: string.valid("附近", "较远", "极远").required(),
        subject: string.valid("文科", "理科", "工科", "商科", "艺术", "体育").required(),
        importance: string.valid("自由时间", "水课", "较不重要", "中等", "重要", "非常重要").required(),

        time: array.items(number.custom((value :unknown, helpers)=>{
            if(typeof(value) == "number") return getTimeIndex(value);
            else return helpers.error("number.invalid");
        })).required(),

        //所有数组长度全部不在这里做校验
        weeks: array.items(boolean).required(),

        color: object.pattern(string, colorInstance).required()
    }),

    LessonsInADay_ = array.items(Lesson_).custom((value, helper)=>{
        /* fixme:这个数组的长度需要与
         * `Data.lessonTemplates.morning.length
          + Data.lessonTemplates.afternoon.length
          + Data.lessonTemplates.night.length`
         * 一样。
         */
        //™不做了！应该不会有人鬼精到这种程度吧，故意改这个地方
        return value;
    });

//#endregion



//#region Data

const

    Data_ :Schema<Data> = object.keys({

        config: object.keys({

            startWeek: date.custom((value :unknown, helpers)=>{
                if(value instanceof Date) return getDateAtWeek(value);
                else return helpers.error("date.invalid");
            }).required(),
            weeksInTerm: number.required(),
            showWeekend: boolean.required(),
            startWeekAtSunday: boolean.required(),

        }).required(),

        ini_state: object.keys({

            currentWeek: number.required(),

        }).required(),

        lessonTemplates: object.keys({

            morning: TimeBlock_$$_.required(),
            afternoon: TimeBlock_$$_.required(),
            night: TimeBlock_$$_.required(),

        }).required(),

        lessons: array.length(7).items(LessonsInADay_).required()

    });

//#endregion

export default Data_;