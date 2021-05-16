import Guid from "types/Guid";
import PlainText from "types/PlainText";
import TextWithOptionalSuperscriptAndOrSubscript from "model/text/TextWithOptionalSuperscriptAndOrSubscript";

export default interface NewsArticleMetadata {
    title: PlainText | TextWithOptionalSuperscriptAndOrSubscript;
    subtitle: PlainText | TextWithOptionalSuperscriptAndOrSubscript;
    authorId: Guid;
    date: Date;
}
