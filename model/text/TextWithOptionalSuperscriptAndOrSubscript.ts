import SubscriptElement from "model/text/elements/inline/SubscriptElement";
import SuperscriptElement from "model/text/elements/inline/SuperscriptElement";

import { InlineElementNode, PlainTextNode } from "model/text/RichTextNode";

interface SingleDepthSuperscriptElement extends SuperscriptElement {
    type: "superscript";
    children: PlainTextNode[];
}

interface SingleDepthSubscriptElement extends SubscriptElement {
    type: "subscript";
    children: PlainTextNode[];
}

interface SingleDepthSuperscriptElementNode extends InlineElementNode { content: SingleDepthSuperscriptElement; }
interface SingleDepthSubscriptElementNode extends InlineElementNode { content: SingleDepthSubscriptElement; }

type TextNodeOrSuperscriptElementNodeOrSubscriptElementNode = PlainTextNode | SingleDepthSuperscriptElementNode | SingleDepthSubscriptElementNode;
type TextWithOptionalSuperscriptAndOrSubscript = TextNodeOrSuperscriptElementNodeOrSubscriptElementNode[];

export default TextWithOptionalSuperscriptAndOrSubscript;
