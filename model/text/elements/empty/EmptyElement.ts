import ImageElement from "model/text/elements/empty/subelements/ImageElement";
import LineBreakElement from "model/text/elements/empty/subelements/LineBreakElement";

import { BaseRichTextElement } from "model/text/elements/RichTextElement";
import { ImageElementType } from "model/text/elements/empty/subelements/ImageElement";
import { LineBreakElementType } from "model/text/elements/empty/subelements/LineBreakElement";

export type EmptyElementNodeType = "emptyElement";
export type EmptyElementType =
    ImageElementType |
    LineBreakElementType;

export interface BaseEmptyElement extends BaseRichTextElement { type: EmptyElementType; }

type EmptyElement =
    ImageElement |
    LineBreakElement;

export default EmptyElement;
