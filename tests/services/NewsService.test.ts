import Database from "types/database/Database";
import DatabaseService from "services/DatabaseService";
import DatabaseTable from "types/database/DatabaseTable";
import MonthIndex from "model/MonthIndex";
import NewsArticle from "model/news/NewsArticle";
import NewsArticleMetadata from "model/news/NewsArticleMetadata";
import NewsService from "services/NewsService";
import RichText from "model/text/RichText";

import { jest } from "@jest/globals";

const fakeNewsArticleContent: RichText = [{ type: "plainText", content: "Content" }];
const fakePartialNewsArticleMetadata: Pick<NewsArticleMetadata, "title" | "subtitle" | "authorId"> = {
    title: "Title",
    subtitle: "Subtitle",
    authorId: "671c8c1e-d7d7-4b36-adb2-d4ff220a1fa1"
};

const fakeOldestNewsArticle: NewsArticle = {
    id: "273e00e1-705f-4fbb-b8a1-7d57dc7bf41e",
    content: fakeNewsArticleContent,
    metadata: {
        ...fakePartialNewsArticleMetadata,
        date: new Date(1970, MonthIndex.January, 1)
    }
};

const fakeSecondNewestNewsArticle: NewsArticle = {
    id: "38d93884-547a-42fe-94e3-af75690fc99b",
    content: fakeNewsArticleContent,
    metadata: {
        ...fakePartialNewsArticleMetadata,
        date: new Date(1970, MonthIndex.January, 2)
    }
};

const fakeNewestNewsArticle: NewsArticle = {
    id: "4854bf09-f1a3-4117-ab0a-5a29ad72f28d",
    content: fakeNewsArticleContent,
    metadata: {
        ...fakePartialNewsArticleMetadata,
        date: new Date(1970, MonthIndex.January, 3)
    }
};

describe("News service", () => {
    it("can’t be instantiated if there’s no news table in the database", () => {
        const emptyDatabase: Database = {};
        const databaseService = new DatabaseService(emptyDatabase);

        const sut = jest.fn(() => new NewsService(databaseService));

        expect(sut).toThrowError("No table with the name “news” exists within the provided database.");
    });

    it("can be instantiated if the database contains a news table", () => {
        const newsTable: DatabaseTable<NewsArticle> = [];
        const database = { news: newsTable };
        const databaseService = new DatabaseService(database);

        const sut = jest.fn(() => new NewsService(databaseService));

        sut();

        expect(sut).toBeCalledTimes(1);
    });

    describe("fetching the most recent news articles", () => {
        it("fails if the number of articles requested is negative", () => {
            const newsTable: DatabaseTable<NewsArticle> = [];
            const database = { news: newsTable };
            const databaseService = new DatabaseService(database);
            const newsService = new NewsService(databaseService);
            const numberOfArticles = -1;

            const sut = jest.fn(() => newsService.fetchMostRecentArticles(numberOfArticles));

            expect(sut).toThrowError(`Please specify a non-negative number of news articles to fetch. Number specified was: “${numberOfArticles}”`);
        });

        it("fails if the number of articles requested is not an integer", () => {
            const newsTable: DatabaseTable<NewsArticle> = [];
            const database = { news: newsTable };
            const databaseService = new DatabaseService(database);
            const newsService = new NewsService(databaseService);
            const numberOfArticles = 1.5;

            const sut = jest.fn(() => newsService.fetchMostRecentArticles(numberOfArticles));

            expect(sut).toThrowError(`Please specify a whole number of news articles to fetch. Number specified was: “${numberOfArticles}”`);
        });

        it("returns an empty array if the number of articles requested is zero", () => {
            const newsTable: DatabaseTable<NewsArticle> = [];
            const database = { news: newsTable };
            const databaseService = new DatabaseService(database);
            const newsService = new NewsService(databaseService);
            const numberOfArticles = 0;

            const expected: NewsArticle[] = [];
            const actual = newsService.fetchMostRecentArticles(numberOfArticles);

            expect(actual).toEqual(expected);
        });

        it("returns all news articles, newest first, if the number requested is greater than the number of articles in the database", () => {
            const newsTable = [fakeOldestNewsArticle, fakeNewestNewsArticle, fakeSecondNewestNewsArticle];
            const database = { news: newsTable };
            const databaseService = new DatabaseService(database);
            const newsService = new NewsService(databaseService);
            const numberOfArticles = 4;

            const expected: NewsArticle[] = [fakeNewestNewsArticle, fakeSecondNewestNewsArticle, fakeOldestNewsArticle];
            const actual = newsService.fetchMostRecentArticles(numberOfArticles);

            expect(actual).toEqual(expected);
        });

        it("returns the number of requested most recent news articles, newest first", () => {
            const newsTable = [fakeOldestNewsArticle, fakeNewestNewsArticle, fakeSecondNewestNewsArticle];
            const database = { news: newsTable };
            const databaseService = new DatabaseService(database);
            const newsService = new NewsService(databaseService);
            const numberOfArticles = 2;

            const expected: NewsArticle[] = [fakeNewestNewsArticle, fakeSecondNewestNewsArticle];
            const actual = newsService.fetchMostRecentArticles(numberOfArticles);

            expect(actual).toEqual(expected);
        });
    });
});
