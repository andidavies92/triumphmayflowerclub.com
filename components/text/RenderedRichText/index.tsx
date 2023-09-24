import AnchorElement from "model/text/elements/inline/subelements/AnchorElement";
import ImageCaption from "components/text/ImageCaption";
import ImagesService from "services/ImagesService";
import Link from "next/link";
import PlainText from "types/PlainText";
import RichText from "model/text/RichText";
import RichTextNode from "model/text/RichTextNode";
import TextWithOptionalSuperscriptAndOrSubscript from "model/text/TextWithOptionalSuperscriptAndOrSubscript";

import { container } from "tsyringe";
import { EmailAnchorElement, PageAnchorElement, PhoneAnchorElement, WebsiteAnchorElement } from "model/text/elements/inline/subelements/AnchorElement";

// TODO: This file needs some _serious_ refactoring...

const isPageAnchorElement = (anchorElement: AnchorElement): anchorElement is PageAnchorElement => (anchorElement as PageAnchorElement).pageUri !== undefined;
const isWebsiteAnchorElement = (anchorElement: AnchorElement): anchorElement is WebsiteAnchorElement => (anchorElement as WebsiteAnchorElement).websiteUri !== undefined;
const isEmailAnchorElement = (anchorElement: AnchorElement): anchorElement is EmailAnchorElement => (anchorElement as EmailAnchorElement).emailUri !== undefined;
const isPhoneAnchorElement = (anchorElement: AnchorElement): anchorElement is PhoneAnchorElement => (anchorElement as PhoneAnchorElement).phoneUri !== undefined;

interface RenderedRichTextNodeProps { node: RichTextNode; }

function RenderedRichTextNode({ node }: RenderedRichTextNodeProps) {
    const { content, type } = node;

    switch (type) {
        case "plainText": return content;

        case "emptyElement": {
            switch (content.type) {
                case "lineBreak": return <br />;
                case "image": {
                    const { imageId, width, caption } = content;

                    const imagesService = container.resolve(ImagesService);
                    const image = imagesService.getImage(imageId);

                    // TODO: Gracefully handle missing images.
                    if (!image) {
                        console.error("Image wasn’t found in the database.");
                        return null;
                    }

                    const { alternativeText, data } = image;

                    return (
                        <>
                            <img
                                src={data}
                                alt={alternativeText}
                                style={{ width: width === "fullWidth" ? "100%" : `${width}px` }}
                            />
                            {caption && <ImageCaption text={caption} />}
                        </>
                    );
                }
            }
        }

        case "inlineElement": {
            switch (content.type) {
                case "anchor": {
                    if (isPageAnchorElement(content)) {
                        const { children, pageUri: { parts: { fragment, path, query } } } = content;

                        const pathString = path ?? "/";
                        const queryString = query ? Object.entries(query).map(([key, value]) => `${key}=${value}`).join("&") : "";
                        const fragmentString = fragment ? `#${fragment}` : "";

                        const uriString = pathString + queryString + fragmentString;

                        return (
                            <Link href={uriString}>
                                {children && <RenderedRichText data={children} />}
                            </Link>
                        );
                    }

                    if (isWebsiteAnchorElement(content)) {
                        const { children, websiteUri: { parts: { fragment, host, path, query }, scheme } } = content;

                        const pathString = path ?? "/";
                        const queryString = query ? Object.entries(query).map(([key, value]) => `${key}=${value}`).join("&") : "";
                        const fragmentString = fragment ? `#${fragment}` : "";

                        const uriString = `${scheme}://${host}${pathString}${queryString}${fragmentString}`;

                        return (
                            <Link href={uriString} target="_blank">
                                {children && <RenderedRichText data={children} />}
                            </Link>
                        );
                    }

                    if (isEmailAnchorElement(content)) {
                        const { children, emailUri: { parts: { email, query }, scheme } } = content;

                        const queryString = query ? Object.entries(query).map(([key, value]) => `${key}=${value}`).join("&") : "";
                        const uriString = `${scheme}:${email}${queryString}`;

                        return (
                            <Link href={uriString}>
                                {children && <RenderedRichText data={children} />}
                            </Link>
                        );
                    }

                    if (isPhoneAnchorElement(content)) {
                        const { children, phoneUri: { parts: { phone }, scheme } } = content;

                        return (
                            <Link href={`${scheme}:${phone}`}>
                                {children && <RenderedRichText data={children} />}
                            </Link>
                        );
                    }
                }

                case "emphasis": {
                    const { children } = content;

                    return (
                        <em>
                            {children && <RenderedRichText data={children} />}
                        </em>
                    );
                }

                case "strong": {
                    const { children } = content;

                    return (
                        <strong>
                            {children && <RenderedRichText data={children} />}
                        </strong>
                    );
                }

                case "subscript": {
                    const { children } = content;

                    return (
                        <sub>
                            {children && <RenderedRichText data={children} />}
                        </sub>
                    );
                }

                case "superscript": {
                    const { children } = content;

                    return (
                        <sup>
                            {children && <RenderedRichText data={children} />}
                        </sup>
                    );
                }
            }
        }

        case "blockElement": {
            switch (content.type) {
                case "section": {
                    throw new Error("Case not yet implemented"); // TODO ...
                }

                case "paragraph": {
                    throw new Error("Case not yet implemented"); // TODO ...
                }

                case "list": {
                    throw new Error("Case not yet implemented"); // TODO ...
                }

                case "listItem": {
                    throw new Error("Case not yet implemented"); // TODO ...
                }

                case "blockQuote": {
                    throw new Error("Case not yet implemented"); // TODO ...
                }
            }
        }
    }
}

interface RenderedRichTextProps { data: PlainText | TextWithOptionalSuperscriptAndOrSubscript | RichText; }

export default function RenderedRichText({ data }: RenderedRichTextProps) {
    if (typeof(data) === "string") return data;
    return data.map(node => <RenderedRichTextNode node={node} />); // TODO: Can a key be used here? Index may be okay, as the data shouldn't ever change during render, but this would result in run-time warnings. Could maybe iterate over the array, assign each element an index, and memoise the result, then map over that, using the preassigned index (or maybe a GUID) as the key. That should get around the React warnings for not using a key / for using index as the key.
}
