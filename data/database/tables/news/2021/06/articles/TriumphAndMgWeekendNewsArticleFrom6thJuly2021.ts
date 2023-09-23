import MonthIndex from "model/MonthIndex";
import NewsArticle from "model/news/NewsArticle";

const TriumphAndMgWeekendNewsArticleFrom6thJuly2021: NewsArticle = {
    id: "bafb1324-4156-4fd4-9dcb-8d80e762beeb",
    metadata: {
        title: "Triumph and MG Weekend",
        subtitle: [
            { type: "plainText", content: "13" },
            {
                type: "inlineElement",
                content: {
                    type: "superscript",
                    children: [{ type: "plainText", content: "th" }]
                }
            },
            { type: "plainText", content: "–15" },
            {
                type: "inlineElement",
                content: {
                    type: "superscript",
                    children: [{ type: "plainText", content: "th" }]
                }
            },
            { type: "plainText", content: " August 2021" }
        ],
        authorId: "3d8c2fcc-8bea-45aa-8322-89760ece82dc",
        date: new Date(2021, MonthIndex.June, 6)
    },
    content: [
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [
                    { type: "plainText", content: "This event will be held on 13" },
                    {
                        type: "inlineElement",
                        content: {
                            type: "superscript",
                            children: [{ type: "plainText", content: "th" }]
                        }
                    },
                    { type: "plainText", content: "–15" },
                    {
                        type: "inlineElement",
                        content: {
                            type: "superscript",
                            children: [{ type: "plainText", content: "th" }]
                        }
                    },
                    { type: "plainText", content: " August 2021 at the Three Counties Showground, Malvern." }
                ]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{ type: "plainText", content: "If you’re interested go to this link for further details:" }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "inlineElement",
                    content: {
                        type: "anchor",
                        websiteUri: {
                            scheme: "https",
                            parts: { host: "www.triumphandmgweekend.com" }
                        },
                        children: [{ type: "plainText", content: "Triumph and MG Weekend 2021" }]
                    }
                }]
            }
        }
    ]
};

export default TriumphAndMgWeekendNewsArticleFrom6thJuly2021;
