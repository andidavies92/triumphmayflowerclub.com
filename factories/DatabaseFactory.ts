import Database from "types/database/Database";

export default class DatabaseFactory {
    static makeDatabase = <Tables extends Database>(tables: Tables) => tables;
}
