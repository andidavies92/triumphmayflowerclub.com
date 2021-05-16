import { BaseInlineElement } from "model/text/elements/inline/InlineElement";

export type EmphasisElementType = "emphasis";
export default interface EmphasisElement extends BaseInlineElement { type: EmphasisElementType; }
