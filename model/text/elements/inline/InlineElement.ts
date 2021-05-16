import AnchorElement from "model/text/elements/inline/AnchorElement";
import EmphasisElement from "model/text/elements/inline/EmphasisElement";
import StrongElement from "model/text/elements/inline/StrongElement";
import SuperscriptElement from "model/text/elements/inline/SuperscriptElement";

import { AnchorElementType } from "model/text/elements/inline/AnchorElement";
import { EmphasisElementType } from "model/text/elements/inline/EmphasisElement";
import { RichTextElementWithOptionalChildren } from "model/text/elements/RichTextElement";
import { StrongElementType } from "model/text/elements/inline/StrongElement";
import { SuperscriptElementType } from "model/text/elements/inline/SuperscriptElement";

export type InlineElementNodeType = "inlineElement";
export type InlineElementType =
    AnchorElementType |
    EmphasisElementType |
    StrongElementType |
    SuperscriptElementType;

export interface BaseInlineElement extends RichTextElementWithOptionalChildren { type: InlineElementType; }

type InlineElement =
    AnchorElement |
    EmphasisElement |
    StrongElement |
    SuperscriptElement;

export default InlineElement;
