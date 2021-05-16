import TextWithOptionalSuperscriptAndOrSubscript from "model/text/TextWithOptionalSuperscriptAndOrSubscript";

import { BaseBlockElement } from "model/text/elements/block/BlockElement";

export type SectionElementType = "section";
export default interface SectionElement extends BaseBlockElement {
    type: SectionElementType;
    heading?: TextWithOptionalSuperscriptAndOrSubscript;
}
