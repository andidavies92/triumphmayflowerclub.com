import PlainText from "types/PlainText";
import TextWithOptionalSuperscript from "model/text/TextWithOptionalSuperscript";

import { BaseBlockElement } from "model/text/elements/block/BlockElement";

export type SectionElementType = "section";
export default interface SectionElement extends BaseBlockElement {
    type: SectionElementType;
    heading?: PlainText | TextWithOptionalSuperscript;
}
