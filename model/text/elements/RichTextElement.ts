import BlockElement from "model/text/elements/block/BlockElement";
import EmptyElement from "model/text/elements/inline/InlineElement";
import InlineElement from "model/text/elements/inline/InlineElement";
import RichText from "model/text/RichText";

import { BlockElementType } from "model/text/elements/block/BlockElement";
import { EmptyElementType } from "model/text/elements/empty/EmptyElement";
import { InlineElementType } from "model/text/elements/inline/InlineElement";

type RichTextElementType =
    InlineElementType |
    BlockElementType |
    EmptyElementType;

export interface BaseRichTextElement { type: RichTextElementType; }
export interface RichTextElementWithOptionalChildren extends BaseRichTextElement { children?: RichText; }

type RichTextElement =
    InlineElement |
    BlockElement |
    EmptyElement;

export default RichTextElement;
