import DatabaseFactory from "factories/DatabaseFactory";
import DefaultsTable from "data/database/tables/DefaultsTable";
import ImagesTable from "data/database/tables/ImagesTable";
import NewsArticlesTable from "data/database/tables/news/NewsArticlesTable";
import PeopleTable from "data/database/tables/PeopleTable";

const DatabaseInstance = DatabaseFactory.makeDatabase({
    defaults: DefaultsTable,
    images: ImagesTable,
    people: PeopleTable,
    news: NewsArticlesTable
});

export default DatabaseInstance;
