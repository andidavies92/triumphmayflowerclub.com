import NewsArticle from "model/news/NewsArticle";
import NewsArticlesFromApril2018 from "data/tables/news/2018/04/NewsArticlesFromApril2018";
import NewsArticlesFromAugust2018 from "data/tables/news/2018/08/NewsArticlesFromAugust2018";
import NewsArticlesFromDecember2018 from "data/tables/news/2018/12/NewsArticlesFromDecember2018";
import NewsArticlesFromJune2018 from "data/tables/news/2018/06/NewsArticlesFromJune2018";
import NewsArticlesFromMarch2018 from "data/tables/news/2018/03/NewsArticlesFromMarch2018";
import NewsArticlesFromMay2018 from "data/tables/news/2018/05/NewsArticlesFromMay2018";
import NewsArticlesFromOctober2018 from "data/tables/news/2018/10/NewsArticlesFromOctober2018";
import NewsArticlesFromSeptember2018 from "data/tables/news/2018/09/NewsArticlesFromSeptember2018";

const NewsArticlesFrom2018: NewsArticle[] = [
    ...NewsArticlesFromDecember2018,
    ...NewsArticlesFromOctober2018,
    ...NewsArticlesFromSeptember2018,
    ...NewsArticlesFromAugust2018,
    ...NewsArticlesFromJune2018,
    ...NewsArticlesFromMay2018,
    ...NewsArticlesFromApril2018,
    ...NewsArticlesFromMarch2018
];

export default NewsArticlesFrom2018;
