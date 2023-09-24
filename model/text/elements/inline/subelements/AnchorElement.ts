import { BaseInlineElement } from "model/text/elements/inline/InlineElement";
import { EmailUri, PageUri, PhoneUri, WebsiteUri } from "model/uris/Uri";

export type AnchorElementType = "anchor";

interface BaseAnchorElement extends BaseInlineElement { type: AnchorElementType; }

export interface PageAnchorElement extends BaseAnchorElement { pageUri: PageUri; }
export interface WebsiteAnchorElement extends BaseAnchorElement { websiteUri: WebsiteUri; }
export interface EmailAnchorElement extends BaseAnchorElement { emailUri: EmailUri; }
export interface PhoneAnchorElement extends BaseAnchorElement { phoneUri: PhoneUri; }

type AnchorElement =
    PageAnchorElement |
    WebsiteAnchorElement |
    EmailAnchorElement |
    PhoneAnchorElement;

export default AnchorElement;
