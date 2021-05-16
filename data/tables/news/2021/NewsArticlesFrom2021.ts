import NewsArticle from "model/news/NewsArticle";
import NewsArticlesFromApril2021 from "data/tables/news/2021/04/NewsArticlesFromApril2021";
import NewsArticlesFromAugust2021 from "data/tables/news/2021/08/NewsArticlesFromAugust2021";
import NewsArticlesFromJanuary2021 from "data/tables/news/2021/01/NewsArticlesFromJanuary2021";
import NewsArticlesFromJune2021 from "data/tables/news/2021/06/NewsArticlesFromJune2021";
import NewsArticlesFromMay2021 from "data/tables/news/2021/05/NewsArticlesFromMay2021";

const NewsArticlesFrom2021: NewsArticle[] = [
    ...NewsArticlesFromAugust2021,
    ...NewsArticlesFromJune2021,
    ...NewsArticlesFromMay2021,
    ...NewsArticlesFromApril2021,
    ...NewsArticlesFromJanuary2021
];

export default NewsArticlesFrom2021;
