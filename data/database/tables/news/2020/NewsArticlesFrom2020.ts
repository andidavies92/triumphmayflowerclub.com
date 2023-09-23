import NewsArticle from "model/news/NewsArticle";
import NewsArticlesFromFebruary2020 from "data/database/tables/news/2020/02/NewsArticlesFromFebruary2020";
import NewsArticlesFromJanuary2020 from "data/database/tables/news/2020/01/NewsArticlesFromJanuary2020";
import NewsArticlesFromJune2020 from "data/database/tables/news/2020/06/NewsArticlesFromJune2020";
import NewsArticlesFromMarch2020 from "data/database/tables/news/2020/03/NewsArticlesFromMarch2020";
import NewsArticlesFromNovember2020 from "data/database/tables/news/2020/11/NewsArticlesFromNovember2020";
import NewsArticlesFromOctober2020 from "data/database/tables/news/2020/10/NewsArticlesFromOctober2020";

const NewsArticlesFrom2020: NewsArticle[] = [
    ...NewsArticlesFromNovember2020,
    ...NewsArticlesFromOctober2020,
    ...NewsArticlesFromJune2020,
    ...NewsArticlesFromMarch2020,
    ...NewsArticlesFromFebruary2020,
    ...NewsArticlesFromJanuary2020
];

export default NewsArticlesFrom2020;
