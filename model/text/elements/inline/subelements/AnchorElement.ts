import { BaseInlineElement } from "model/text/elements/inline/InlineElement";
import { EmailUri, PageUri, PhoneUri, WebsiteUri } from "model/uris/Uri";

export type AnchorElementType = "anchor";

interface BaseAnchorElement extends BaseInlineElement { type: AnchorElementType; }

interface PageAnchorElement extends BaseAnchorElement { pageUri: PageUri; }
interface WebsiteAnchorElement extends BaseAnchorElement { websiteUri: WebsiteUri; }
interface EmailAnchorElement extends BaseAnchorElement { emailUri: EmailUri; }
interface PhoneAnchorElement extends BaseAnchorElement { phoneUri: PhoneUri; }

type AnchorElement =
    PageAnchorElement |
    WebsiteAnchorElement |
    EmailAnchorElement |
    PhoneAnchorElement;

export default AnchorElement;
