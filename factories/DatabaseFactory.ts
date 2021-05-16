import DatabaseSchema from "types/database/DatabaseSchema";

type TablesMap = { [name: string]: DatabaseSchema };

export default class DatabaseFactory {
    static makeDatabase = <Tables extends TablesMap>(tables: Tables) => tables;
}
