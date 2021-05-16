import { BaseBlockElement } from "model/text/elements/block/BlockElement";

export type BlockQuoteElementType = "blockQuote";
export default interface BlockQuoteElement extends BaseBlockElement { type: BlockQuoteElementType; }
