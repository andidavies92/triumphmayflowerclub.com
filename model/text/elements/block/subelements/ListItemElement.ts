import { BaseBlockElement } from "model/text/elements/block/BlockElement";

export type ListItemElementType = "listItem";
export default interface ListItemElement extends BaseBlockElement { type: ListItemElementType; }
