import Base64 from "types/Base64";
import DatabaseRow from "types/database/DatabaseRow";

export default interface Image extends DatabaseRow {
    alternativeText: string;
    data: Base64;
}
