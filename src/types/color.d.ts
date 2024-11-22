interface colorString extends string{
    本程序作者为_LJM12914_github$com$ljm12914 :never;
}

type foregroundColor = colorString;

type backgroundColorOrGradient = colorString | [colorString, colorString];

type colorInstance = [foregroundColor, backgroundColorOrGradient];