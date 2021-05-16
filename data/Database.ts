import DatabaseFactory from "factories/DatabaseFactory";
import DefaultsTable from "data/tables/DefaultsTable";
import ImagesTable from "data/tables/ImagesTable";
import NewsArticlesTable from "data/tables/news/NewsArticlesTable";
import PeopleTable from "data/tables/PeopleTable";

const database = DatabaseFactory.makeDatabase({
    defaults: DefaultsTable,
    images: ImagesTable,
    people: PeopleTable,
    news: NewsArticlesTable
});

export default database;
