import { Immutable } from "immer";

type foregroundColor = colorString;

type backgroundColorOrGradient = colorString | [colorString, colorString];

export type colorInstance = [foregroundColor, backgroundColorOrGradient];

export type Color = Immutable<Record<string, colorInstance>>;