import DatabaseTable from "types/database/DatabaseTable";
import NewsArticle from "model/news/NewsArticle";
import NewsArticlesFrom2018 from "data/tables/news/2018/NewsArticlesFrom2018";
import NewsArticlesFrom2019 from "data/tables/news/2019/NewsArticlesFrom2019";
import NewsArticlesFrom2020 from "data/tables/news/2020/NewsArticlesFrom2020";
import NewsArticlesFrom2021 from "data/tables/news/2021/NewsArticlesFrom2021";

const NewsArticlesTable: DatabaseTable<NewsArticle> = [
    ...NewsArticlesFrom2021,
    ...NewsArticlesFrom2020,
    ...NewsArticlesFrom2019,
    ...NewsArticlesFrom2018
];

export default NewsArticlesTable;
