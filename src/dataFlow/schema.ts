import Joi from "joi";
import { validateDateAtWeek } from "./validateDate";

const { object, number, array, boolean, date } = Joi.types();


//???:fixme:怎么成required地狱了😅全是required
//Joi.js的文档真的又乱又卡，真不想用
//也没说哪里加了required就不用加其他地方
//那只能全加了啊



//#region 时间

const

    Time_ = array.length(2).ordered(
        number.min(0).max(23).required(),
        number.min(0).max(59).required()
    ).required(),

    TimeBlock_ = object.keys({
        startTime: Time_.required(),
        endTime: Time_.required(),
    }).required(),

    /**`TimeBlock[]`*/
    TimeBlock_$$_ = array.items(TimeBlock_);

//#endregion



//#region 课程

const

    Lesson_ = object.keys({
        //todo:Lesson
    }).required(),

    LessonsInADay_ = array.items(Lesson_).custom((value, helper)=>{
        /* todo:这个数组的长度需要与
         * `Data.lessonTemplates.morning.length
          + Data.lessonTemplates.afternoon.length
          + Data.lessonTemplates.night.length`
         * 一样。
         */
    }).required();

//#endregion



//#region Data

const

    Data_ = object.keys({

        timestamp: number.required(),

        config: object.keys({

            startWeek: date.custom((value :unknown, helpers)=>{
                if(value instanceof Date) return validateDateAtWeek(value);
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

    }).required();

//#endregion

export default Data_;
//DEV ONLY
Object.defineProperties(window, {
    DataSchema_个人网站_i$ljm$im: {
        get(){
            return Data_;
        }
    }
});
export function please_delete_this(){
    return 6;
}