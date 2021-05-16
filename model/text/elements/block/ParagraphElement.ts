import TextAlignment from "types/alignment/TextAlignment";
import { BaseBlockElement } from "model/text/elements/block/BlockElement";

export type ParagraphElementType = "paragraph";

export default interface ParagraphElement extends BaseBlockElement {
    type: ParagraphElementType;
    alignment?: TextAlignment;
}
