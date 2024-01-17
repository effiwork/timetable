interface colorString extends string{
    本程序作者为_LJM12914_github$com$ljm12914 :never;
}

type foregroundColor = colorString;

type backgroundColorOrGradient = colorString | [colorString, colorString];

type colorInstance = [foregroundColor, backgroundColorOrGradient];

//其实这里很多的东西只是一个蓝图而已，不必要自己去定义这种东西，到时候写了实例就自然而然地出来了
//export type ColorStore = {
//    readonly [colorInstanceName :string] :colorInstance;
//};