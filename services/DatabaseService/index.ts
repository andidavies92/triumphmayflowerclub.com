import Database from "types/database/Database";
import DatabaseTable from "types/database/DatabaseTable";
import Image from "model/Image";
import NewsArticle from "model/news/NewsArticle";

import { inject, injectable } from "tsyringe";

@injectable()
export default class DatabaseService {
    constructor(@inject(Database) private readonly database: Database) {}

    private hasTable = (tableName: string) => tableName in this.database;

    private getTable(tableName: string) {
        if (!this.hasTable(tableName)) throw new Error(`No table with the name “${tableName}” exists within the provided database.`);
        return this.database[tableName];
    }

    hasImagesTable = () => this.hasTable("images");
    hasNewsTable = () => this.hasTable("news");

    getImagesTable = () => this.getTable("images") as DatabaseTable<Image>;
    getNewsTable = () => this.getTable("news") as DatabaseTable<NewsArticle>;
}
