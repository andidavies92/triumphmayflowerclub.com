import ListItemElement from "model/text/elements/block/subelements/ListItemElement";
import { BaseBlockElement } from "model/text/elements/block/BlockElement";

export type ListElementType = "list";

export default interface ListElement extends BaseBlockElement {
    type: ListElementType;
    listType: "ordered" | "unordered";
    children: ({
        type: "blockElement";
        content: ListElement | ListItemElement;
    })[];
}
