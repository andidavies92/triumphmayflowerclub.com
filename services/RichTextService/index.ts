import RichText from "model/text/RichText";
import TextWithOptionalSuperscriptAndOrSubscript from "model/text/TextWithOptionalSuperscriptAndOrSubscript";

import { injectable } from "tsyringe";
import { PlainTextNode } from "model/text/RichTextNode";

const plainTextNodeContainingASingleSpaceCharacter: PlainTextNode = { type: "plainText", content: " " };

@injectable()
export default class RichTextService {
    mergeAdjacentPlainTextNodes(nodes: TextWithOptionalSuperscriptAndOrSubscript): TextWithOptionalSuperscriptAndOrSubscript {
        if (nodes.length < 2) return nodes;

        const currentNode = nodes[0];
        const nextNode = nodes[1];

        if (currentNode.type !== "plainText" || nextNode.type !== "plainText") {
            return [
                currentNode,
                ...this.mergeAdjacentPlainTextNodes(nodes.slice(1))
            ];
        }

        return this.mergeAdjacentPlainTextNodes([
            {
                type: "plainText",
                content: currentNode.content + nextNode.content
            },
            ...nodes.slice(2)
        ]);
    }

    flattenToString(richText: RichText) {
        let flattened = "";

        richText.forEach(async node => {
            const { content, type } = node;

            switch (type) {
                case "plainText": {
                    flattened += content;
                    break;
                }

                case "inlineElement":
                case "blockElement": {
                    const { children } = content;
                    if (children) flattened += this.flattenToString(children);
                    break;
                }
            }
        });

        return flattened;
    }

    flattenToTextWithOptionalSuperscriptAndOrSubscript(richText: RichText): TextWithOptionalSuperscriptAndOrSubscript {
        if (richText.length === 0) return richText as TextWithOptionalSuperscriptAndOrSubscript;
        if (richText.length === 1 && richText[0].type === "plainText") return richText as TextWithOptionalSuperscriptAndOrSubscript;
        if (richText.length === 2 && richText[0].type === "plainText" && richText[1].type === "plainText") {
            return [{
                type: "plainText",
                content: richText[0].content + richText[1].content
            }];
        }

        let flattened: TextWithOptionalSuperscriptAndOrSubscript = [];
        
        richText.forEach(async (node, index) => {
            const { content, type } = node;

            switch (type) {
                case "plainText": {
                    flattened = [...flattened, node];
                    break;
                }

                case "emptyElement": {
                    if (content.type === "lineBreak") {
                        flattened = this.flattenToTextWithOptionalSuperscriptAndOrSubscript([
                            ...flattened,
                            plainTextNodeContainingASingleSpaceCharacter
                        ]);
                    }

                    break;
                }

                case "inlineElement": {
                    const { children, type } = content;

                    if (["superscript", "subscript"].includes(type)) {
                        const content = children ? this.flattenToString(children) : "";

                        flattened = [
                            ...flattened,
                            type === "superscript"
                                ? { type: "inlineElement", content: { type: "superscript", children: [{ type: "plainText", content }] } }
                                : { type: "inlineElement", content: { type: "subscript", children: [{ type: "plainText", content }] } }
                        ];
                    } else if (children) {
                        flattened = [...flattened, ...this.flattenToTextWithOptionalSuperscriptAndOrSubscript(children)];
                    }

                    break;
                }

                case "blockElement": {
                    const { children, type } = content;
                    
                    if (children) {
                        const flattenedChildren = this.flattenToTextWithOptionalSuperscriptAndOrSubscript(children);

                        let isFirstTextInfluencingSibling = true;

                        for (let previousSiblingIndex = 0; previousSiblingIndex < index; previousSiblingIndex++) {
                            const previousSibling = richText[previousSiblingIndex];

                            if (previousSibling.type === "emptyElement") {
                                if (previousSibling.content.type === "lineBreak") {
                                    isFirstTextInfluencingSibling = false;
                                }
                            } else {
                                isFirstTextInfluencingSibling = false;
                            }
                        }

                        const leadingSpace: TextWithOptionalSuperscriptAndOrSubscript = isFirstTextInfluencingSibling ? [] : [plainTextNodeContainingASingleSpaceCharacter];
                        const heading: TextWithOptionalSuperscriptAndOrSubscript = type === "section" && content.heading !== undefined ? [
                            ...content.heading,
                            plainTextNodeContainingASingleSpaceCharacter
                        ] : [];

                        flattened = [
                            ...flattened,
                            ...leadingSpace,
                            ...heading,
                            ...flattenedChildren
                        ];
                    }

                    break;
                }
            }
        });

        const merged = this.mergeAdjacentPlainTextNodes(flattened);

        return merged;
    }
}
