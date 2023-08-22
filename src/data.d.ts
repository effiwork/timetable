interface Data{
    timestamp :number;
    lessonContainer :{
        morning :number;
        afternoon :number;
        night :number;
    }
    
}
enum LessonTypes{
    freedom,
    important,
    general,
    water,
    remote,
    faraway
}