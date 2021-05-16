import { CSSProperties } from "react";

type StylesMap = { [name: string]: CSSProperties };

export default class StylesFactory {
    static makeStyles = <Styles extends StylesMap>(styles: Styles) => styles;
}
