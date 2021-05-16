import EmailAddress from "types/EmailAddress";

type UriQuery = { [key: string]: string | undefined };

export default UriQuery;
export interface EmailUriQuery extends UriQuery {
    subject?: string;
    cc?: EmailAddress;
}
