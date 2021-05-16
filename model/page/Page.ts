import PageContent from "model/page/PageContent";
import PageMetadata from "model/page/PageMetadata";

export default interface Page {
    metadata: PageMetadata;
    content: PageContent;
}
