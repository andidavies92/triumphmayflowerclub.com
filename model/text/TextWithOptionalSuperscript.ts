import SuperscriptElement from "model/text/elements/inline/SuperscriptElement";
import { InlineElementNode, PlainTextNode } from "model/text/RichTextNode";

interface SingleDepthSuperscriptElement extends SuperscriptElement {
    type: "superscript";
    children: PlainTextNode[];
}

interface SingleDepthSuperscriptElementNode extends InlineElementNode { content: SingleDepthSuperscriptElement; }

type TextNodeOrSuperscriptElementNode = PlainTextNode | SingleDepthSuperscriptElementNode;
type TextWithOptionalSuperscript = TextNodeOrSuperscriptElementNode[];

export default TextWithOptionalSuperscript;
