import EmailAddress from "types/EmailAddress";
import UriFragment from "types/uris/UriFragment";
import UriHost from "types/uris/UriHost";
import UriPath from "types/uris/UriPath";
import UriQuery from "model/uris/UriQuery";
import UriScheme from "types/uris/UriScheme";

import { EmailUriQuery } from "model/uris/UriQuery";
import { FullPhoneNumber } from "types/PhoneNumber";

interface PageUriParts {
    path?: UriPath;
    query?: UriQuery;
    fragment?: UriFragment;
}

interface WebsiteUriParts extends PageUriParts {
    host: UriHost;
}

interface EmailUriParts {
    email: EmailAddress;
    query?: EmailUriQuery;
}

interface PhoneUriParts {
    phone: FullPhoneNumber;
}

type UriParts = PageUriParts | WebsiteUriParts | EmailUriParts | PhoneUriParts;

interface BaseUri {
    scheme?: UriScheme;
    parts: UriParts;
}

export interface PageUri extends Pick<BaseUri, "parts"> {
    parts: PageUriParts;
}

export interface WebsiteUri extends BaseUri {
    scheme: "http" | "https";
    parts: WebsiteUriParts;
}

export interface EmailUri extends BaseUri {
    scheme: "mailto";
    parts: EmailUriParts;
}

export interface PhoneUri extends BaseUri {
    scheme: "tel";
    parts: PhoneUriParts;
}

type Uri = PageUri | WebsiteUri | EmailUri | PhoneUri;

export default Uri;
