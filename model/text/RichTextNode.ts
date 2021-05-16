import BlockElement from "model/text/elements/block/BlockElement";
import EmptyElement from "model/text/elements/empty/EmptyElement";
import InlineElement from "model/text/elements/inline/InlineElement";
import PlainText from "types/PlainText";

import { BlockElementNodeType } from "model/text/elements/block/BlockElement";
import { EmptyElementNodeType } from "model/text/elements/empty/EmptyElement";
import { InlineElementNodeType } from "model/text/elements/inline/InlineElement";
import { PlainTextNodeType } from "types/PlainText";

type RichTextNodeType =
    PlainTextNodeType |
    InlineElementNodeType |
    BlockElementNodeType |
    EmptyElementNodeType;

type RichTextNodeContent =
    PlainText |
    InlineElement |
    BlockElement |
    EmptyElement;

interface BaseRichTextNode {
    type: RichTextNodeType;
    content: RichTextNodeContent;
}

export interface PlainTextNode extends BaseRichTextNode { type: "plainText"; content: PlainText; }
export interface InlineElementNode extends BaseRichTextNode { type: "inlineElement"; content: InlineElement; }
export interface BlockElementNode extends BaseRichTextNode { type: "blockElement"; content: BlockElement; }
export interface EmptyElementNode extends BaseRichTextNode { type: "emptyElement"; content: EmptyElement; }

type RichTextNode =
    PlainTextNode |
    InlineElementNode |
    BlockElementNode |
    EmptyElementNode;

export default RichTextNode;
