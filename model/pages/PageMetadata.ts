import Author from "model/identity/Author";
import Page from "model/pages/Page";
import WebsiteSection from "model/WebsiteSection";

export default interface PageMetadata {
    section: WebsiteSection;
    parent?: Page;
    title: string;
    author?: Author;
}
