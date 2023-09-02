export enum SettingTypes{
    switch = 0,
    dateAtWeek = 1,
    hr = 2,
    numberInput = 3
}
export type SettingEntry = {
    title :string;
    id :string;
    description :string;
    type :SettingTypes;
    updateProcessor :(value :unknown)=>void;
};
export const SettingEntries :SettingEntry[] = [
    {
        id: "show-weekend",
        title: "显示周末",
        description: "会使得周程表布局更窄。",
        type: SettingTypes.switch,
        updateProcessor(value :unknown){

        }
    },
    {
        id: "start-at-sunday",
        title: "从周日开始一周",
        description: "必须显示周末才会有效。",
        type: SettingTypes.switch,
        updateProcessor(value :unknown){
            
        }
    },
    {id: "TypeScriptParserda", description: "", title: "", type: SettingTypes.hr,updateProcessor(){}},
    {
        id: "start-date",
        title: "开始上课的日期",
        description: "手动输入格式：<年份>-<周数>周",
        type: SettingTypes.dateAtWeek,
        updateProcessor(value :unknown){
            
        }
    },
    {
        id: "morning-lesson-count",
        title: "上午课程节数",
        description: "在主界面点击左侧时间轴编辑具体时间。",
        type: SettingTypes.numberInput,
        updateProcessor(value :unknown){
            
        }
    },
    {
        id: "afternoon-lesson-count",
        title: "下午课程节数",
        description: "在主界面点击左侧时间轴编辑具体时间。",
        type: SettingTypes.numberInput,
        updateProcessor(value :unknown){
            
        }
    },
    {
        id: "night-lesson-count",
        title: "晚上课程节数",
        description: "在主界面点击左侧时间轴编辑具体时间。",
        type: SettingTypes.numberInput,
        updateProcessor(value :unknown){
            
        }
    },
    {id: "TypeScriptParserMixiparseUpda", description: "", title: "", type: SettingTypes.hr,updateProcessor(){}},
    {
        id: "offline-mode",
        title: "启用离线模式",
        description: "启用后将仅使用已下载的资源，可节省流量、加快打开速度，但必须关闭才能接收最新更新。",
        type: SettingTypes.switch,
        updateProcessor(value :unknown){
            
        }
    },
];