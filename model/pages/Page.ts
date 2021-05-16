import PageContent from "model/pages/PageContent";
import PageMetadata from "model/pages/PageMetadata";

export default interface Page {
    metadata: PageMetadata;
    content: PageContent;
}
