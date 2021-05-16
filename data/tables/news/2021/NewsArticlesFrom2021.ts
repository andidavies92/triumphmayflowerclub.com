import NewsArticle from "model/news/NewsArticle";
import NewsArticlesFromApril2021 from "data/tables/news/2021/04/NewsArticlesFromApril2021";
import NewsArticlesFromJanuary2021 from "data/tables/news/2021/01/NewsArticlesFromJanuary2021";

const NewsArticlesFrom2021: NewsArticle[] = [
    ...NewsArticlesFromApril2021,
    ...NewsArticlesFromJanuary2021
];

export default NewsArticlesFrom2021;
