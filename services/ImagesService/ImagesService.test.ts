import Database from "types/database/Database";
import DatabaseService from "services/DatabaseService";
import DatabaseTable from "types/database/DatabaseTable";
import Image from "model/Image";
import ImagesService from "services/ImagesService";

import { jest } from "@jest/globals";

describe("Images service", () => {
    it("can’t be instantiated if there’s no images table in the database", () => {
        const emptyDatabase: Database = {};
        const databaseService = new DatabaseService(emptyDatabase);

        const sut = jest.fn(() => new ImagesService(databaseService));

        expect(sut).toThrowError("No table with the name “images” exists within the provided database.");
    });

    it("can be instantiated if the database contains an imagess table", () => {
        const imagesTable: DatabaseTable<Image> = [];
        const database = { images: imagesTable };
        const databaseService = new DatabaseService(database);

        const sut = jest.fn(() => new ImagesService(databaseService));

        sut();

        expect(sut).toBeCalledTimes(1);
    });

    describe("getting an image by ID", () => {
        it("returns null if an image with the given ID isn’t found", () => {
            const imagesTable: DatabaseTable<Image> = [];
            const database = { images: imagesTable };
            const databaseService = new DatabaseService(database);
            const imagesService = new ImagesService(databaseService);

            const expected = null;
            const actual = imagesService.getImage("");

            expect(actual).toEqual(expected);
        });

        it("returns the requested image if it exists in the database", () => {
            const id = "";
            const expected: Image = { id, data: "", alternativeText: "" };
            const imagesTable: DatabaseTable<Image> = [expected];
            const database = { images: imagesTable };
            const databaseService = new DatabaseService(database);
            const imagesService = new ImagesService(databaseService);
            const actual = imagesService.getImage(id);

            expect(actual).toEqual(expected);
        });
    });
});
