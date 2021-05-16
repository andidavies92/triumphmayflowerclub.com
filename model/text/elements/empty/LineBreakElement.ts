import { BaseEmptyElement } from "model/text/elements/empty/EmptyElement";

export type LineBreakElementType = "lineBreak";
export default interface LineBreakElement extends BaseEmptyElement { type: LineBreakElementType; }
