import Database from "types/database/Database";
import DatabaseService from "services/DatabaseService";
import DatabaseTable from "types/database/DatabaseTable";
import NewsArticle from "model/news/NewsArticle";

import { jest } from "@jest/globals";

describe("Database service", () => {
    it("can be instantiated with an empty database", () => {
        const emptyDatabase: Database = {};
        const sut = jest.fn(() => new DatabaseService(emptyDatabase));

        sut();

        expect(sut).toBeCalledTimes(1);
    });

    describe("checking for a table’s existence", () => {
        it("returns false if a table doesn’t exist", () => {
            const expected = false;
            const service = new DatabaseService({});
            const actual = service.hasNewsTable();

            expect(actual).toEqual(expected);
        });

        it("returns true if a table exists", () => {
            const expected = true;
            const service = new DatabaseService({ news: [] });
            const actual = service.hasNewsTable();

            expect(actual).toEqual(expected);
        });
    });

    describe("getting a table", () => {
        it("fails if it doesn’t exist", () => {
            const emptyDatabase: Database = {};
            const service = new DatabaseService(emptyDatabase);
            const tableName = "news";

            const sut = jest.fn(() => service.getNewsTable());

            expect(sut).toThrowError(`No table with the name “${tableName}” exists within the provided database.`);
        });

        it("returns the table if it exists", () => {
            const expected: DatabaseTable<NewsArticle> = [];
            const service = new DatabaseService({ news: expected });
            const actual = service.getNewsTable();

            expect(actual).toEqual(expected);
        });
    });
});
