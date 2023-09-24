import DatabaseService from "services/DatabaseService";
import { injectable } from "tsyringe";

@injectable()
export default class NewsService {
    constructor(private databaseService: DatabaseService) {
        if (!databaseService.hasNewsTable()) throw new Error("No table with the name “news” exists within the provided database.");
    }

    fetchMostRecentArticles(numberOfArticles: number) {
        if (numberOfArticles < 0) throw new Error(`Please specify a non-negative number of news articles to fetch. Number specified was: “${numberOfArticles}”`);
        if (!Number.isInteger(numberOfArticles)) throw new Error(`Please specify a whole number of news articles to fetch. Number specified was: “${numberOfArticles}”`);

        if (numberOfArticles === 0) return [];

        return this.databaseService.getNewsTable()
            .sort((articleA, articleB) => articleB.metadata.date.getTime() - articleA.metadata.date.getTime())
            .slice(0, numberOfArticles);
    }
}
