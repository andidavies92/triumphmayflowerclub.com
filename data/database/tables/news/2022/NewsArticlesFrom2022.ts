import NewsArticle from "model/news/NewsArticle";
import NewsArticlesFromFebruary2022 from "data/database/tables/news/2022/02/NewsArticlesFromFebruary2022";
import NewsArticlesFromJanuary2022 from "data/database/tables/news/2022/01/NewsArticlesFromJanuary2022";

const NewsArticlesFrom2022: NewsArticle[] = [
    ...NewsArticlesFromFebruary2022,
    ...NewsArticlesFromJanuary2022
];

export default NewsArticlesFrom2022;
