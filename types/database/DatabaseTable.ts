import DatabaseRow from "types/database/DatabaseRow";
type DatabaseTable<R extends DatabaseRow> = R[];
export default DatabaseTable;
