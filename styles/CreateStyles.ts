import { CSSProperties } from "react";
type StylesMap = { [name: string]: CSSProperties };
const createStyles = <Styles extends StylesMap>(styles: Styles) => styles;
export default createStyles;
