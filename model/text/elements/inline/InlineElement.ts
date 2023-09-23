import AnchorElement from "model/text/elements/inline/subelements/AnchorElement";
import EmphasisElement from "model/text/elements/inline/subelements/EmphasisElement";
import StrongElement from "model/text/elements/inline/subelements/StrongElement";
import SubscriptElement from "model/text/elements/inline/subelements/SubscriptElement";
import SuperscriptElement from "model/text/elements/inline/subelements/SuperscriptElement";

import { AnchorElementType } from "model/text/elements/inline/subelements/AnchorElement";
import { EmphasisElementType } from "model/text/elements/inline/subelements/EmphasisElement";
import { RichTextElementWithOptionalChildren } from "model/text/elements/RichTextElement";
import { StrongElementType } from "model/text/elements/inline/subelements/StrongElement";
import { SubscriptElementType } from "model/text/elements/inline/subelements/SubscriptElement";
import { SuperscriptElementType } from "model/text/elements/inline/subelements/SuperscriptElement";

export type InlineElementNodeType = "inlineElement";
export type InlineElementType =
    AnchorElementType |
    EmphasisElementType |
    StrongElementType |
    SubscriptElementType |
    SuperscriptElementType;

export interface BaseInlineElement extends RichTextElementWithOptionalChildren { type: InlineElementType; }

type InlineElement =
    AnchorElement |
    EmphasisElement |
    StrongElement |
    SubscriptElement |
    SuperscriptElement;

export default InlineElement;
