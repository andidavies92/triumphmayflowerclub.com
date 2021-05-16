import NewsArticle from "model/news/NewsArticle";
import NewsArticlesFromApril2019 from "data/tables/news/2019/04/NewsArticlesFromApril2019";
import NewsArticlesFromAugust2019 from "data/tables/news/2019/08/NewsArticlesFromAugust2019";
import NewsArticlesFromFebruary2019 from "data/tables/news/2019/02/NewsArticlesFromFebruary2019";
import NewsArticlesFromJanuary2019 from "data/tables/news/2019/01/NewsArticlesFromJanuary2019";
import NewsArticlesFromJuly2019 from "data/tables/news/2019/07/NewsArticlesFromJuly2019";
import NewsArticlesFromMarch2019 from "data/tables/news/2019/03/NewsArticlesFromMarch2019";
import NewsArticlesFromMay2019 from "data/tables/news/2019/05/NewsArticlesFromMay2019";

const NewsArticlesFrom2019: NewsArticle[] = [
    ...NewsArticlesFromAugust2019,
    ...NewsArticlesFromJuly2019,
    ...NewsArticlesFromMay2019,
    ...NewsArticlesFromApril2019,
    ...NewsArticlesFromMarch2019,
    ...NewsArticlesFromFebruary2019,
    ...NewsArticlesFromJanuary2019
];

export default NewsArticlesFrom2019;
