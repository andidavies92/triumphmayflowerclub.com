import Database from "types/database/Database";
import DatabaseService from "services/DatabaseService";
import DatabaseTable from "types/database/DatabaseTable";
import Image from "model/Image";
import MonthIndex from "model/MonthIndex";
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

    describe("getting tables", () => {
        describe("images table", () => {
            it("fails if it doesn’t exist", () => {
                const emptyDatabase: Database = {};
                const service = new DatabaseService(emptyDatabase);
                const tableName = "images";

                const sut = jest.fn(() => service.getImagesTable());

                expect(sut).toThrowError(`No table with the name “${tableName}” exists within the provided database.`);
            });

            it("returns the table if it exists", () => {
                const expected: DatabaseTable<Image> = [];
                const service = new DatabaseService({ images: expected });
                const actual = service.getImagesTable();

                expect(actual).toEqual(expected);
            });

            it("returns the expected data", () => {
                const expected: Image = { id: "", data: "", alternativeText: "" };
                const table: DatabaseTable<Image> = [expected];
                const service = new DatabaseService({ images: table });
                const actual = service.getImagesTable()[0];

                expect(actual).toEqual(expected);
            });
        });

        describe("news table", () => {
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

            it("returns the expected data", () => {
                const expected: NewsArticle = { id: "", metadata: { title: "", subtitle: "", authorId: "", date: new Date(1970, MonthIndex.January, 1) }, content: [] };
                const table: DatabaseTable<NewsArticle> = [expected];
                const service = new DatabaseService({ news: table });
                const actual = service.getNewsTable()[0];

                expect(actual).toEqual(expected);
            });
        });
    });
});
