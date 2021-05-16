import MonthIndex from "model/MonthIndex";
import NewsArticle from "model/news/NewsArticle";

const CancelledAgmNewsArticleFrom1stNovember2020: NewsArticle = {
    id: "b69a2b68-d231-4afd-805b-cc220fda1288",
    metadata: {
        title: "Cancelled AGM",
        subtitle: "Unprecedented times…",
        authorId: "96630854-040f-466d-9696-0bfbff8aefce",
        date: new Date(2020, MonthIndex.November, 1)
    },
    content: [
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Due to the continuing COVID-19 situation the committee have decided to cancel this year’s AGM and will aim to convene next year’s around its usual time."
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Paul Burgess"
                }]
            }
        }
    ]
};

export default CancelledAgmNewsArticleFrom1stNovember2020;
