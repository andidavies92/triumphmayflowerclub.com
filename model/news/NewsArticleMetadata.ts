import Guid from "types/Guid";
import PlainText from "types/PlainText";
import TextWithOptionalSuperscript from "model/text/TextWithOptionalSuperscript";

export default interface NewsArticleMetadata {
    title: PlainText | TextWithOptionalSuperscript;
    subtitle: PlainText | TextWithOptionalSuperscript;
    authorId: Guid;
    date: Date;
}
