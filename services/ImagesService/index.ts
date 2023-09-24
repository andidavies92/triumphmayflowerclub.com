import DatabaseService from "services/DatabaseService";
import Guid from "types/Guid";

import { injectable } from "tsyringe";

@injectable()
export default class ImagesService {
    constructor(private databaseService: DatabaseService) {
        if (!databaseService.hasImagesTable()) throw new Error("No table with the name “images” exists within the provided database.");
    }

    getImage = (id: Guid) => this.databaseService.getImagesTable().find(image => image.id === id) ?? null;
}
