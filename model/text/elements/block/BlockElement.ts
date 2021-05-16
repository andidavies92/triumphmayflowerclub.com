import BlockQuoteElement from "model/text/elements/block/BlockQuoteElement";
import ListElement from "model/text/elements/block/ListElement";
import ListItemElement from "model/text/elements/block/ListItemElement";
import ParagraphElement from "model/text/elements/block/ParagraphElement";
import SectionElement from "model/text/elements/block/SectionElement";

import { BlockQuoteElementType } from "model/text/elements/block/BlockQuoteElement";
import { ListElementType } from "model/text/elements/block/ListElement";
import { ListItemElementType } from "model/text/elements/block/ListItemElement";
import { ParagraphElementType } from "model/text/elements/block/ParagraphElement";
import { RichTextElementWithOptionalChildren } from "model/text/elements/RichTextElement";
import { SectionElementType } from "model/text/elements/block/SectionElement";

export type BlockElementNodeType = "blockElement";
export type BlockElementType =
    SectionElementType |
    ParagraphElementType |
    ListElementType |
    ListItemElementType |
    BlockQuoteElementType;

export interface BaseBlockElement extends RichTextElementWithOptionalChildren { type: BlockElementType; }

type BlockElement =
    SectionElement |
    ParagraphElement |
    ListElement |
    ListItemElement |
    BlockQuoteElement;

export default BlockElement;
