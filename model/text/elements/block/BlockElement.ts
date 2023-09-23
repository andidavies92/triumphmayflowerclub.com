import BlockQuoteElement from "model/text/elements/block/subelements/BlockQuoteElement";
import ListElement from "model/text/elements/block/subelements/ListElement";
import ListItemElement from "model/text/elements/block/subelements/ListItemElement";
import ParagraphElement from "model/text/elements/block/subelements/ParagraphElement";
import SectionElement from "model/text/elements/block/subelements/SectionElement";

import { BlockQuoteElementType } from "model/text/elements/block/subelements/BlockQuoteElement";
import { ListElementType } from "model/text/elements/block/subelements/ListElement";
import { ListItemElementType } from "model/text/elements/block/subelements/ListItemElement";
import { ParagraphElementType } from "model/text/elements/block/subelements/ParagraphElement";
import { RichTextElementWithOptionalChildren } from "model/text/elements/RichTextElement";
import { SectionElementType } from "model/text/elements/block/subelements/SectionElement";

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
