import DatabaseRow from "types/database/DatabaseRow";
import DatabaseTable from "types/database/DatabaseTable";

type DatabaseSchema = DatabaseTable<object & DatabaseRow>;

export default DatabaseSchema;
