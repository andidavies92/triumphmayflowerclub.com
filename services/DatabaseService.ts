import Database from "types/database/Database";
import DatabaseTable from "types/database/DatabaseTable";
import NewsArticle from "model/news/NewsArticle";

export default class DatabaseService {
    constructor(private readonly database: Database) {}

    private hasTable = (tableName: string) => tableName in this.database;

    private getTable(tableName: string) {
        if (!this.hasTable(tableName)) throw new Error(`No table with the name “${tableName}” exists within the provided database.`);
        return this.database[tableName];
    }

    hasNewsTable = () => this.hasTable("news");

    getNewsTable = () => this.getTable("news") as DatabaseTable<NewsArticle>;
}
