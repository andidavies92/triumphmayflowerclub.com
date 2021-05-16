import DatabaseRow from "types/database/DatabaseRow";
import NewsArticleMetadata from "model/news/NewsArticleMetadata";
import RichText from "model/text/RichText";

export default interface NewsArticle extends DatabaseRow {
    metadata: NewsArticleMetadata;
    content: RichText;
}
