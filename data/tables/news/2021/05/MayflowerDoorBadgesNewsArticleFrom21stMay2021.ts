import MonthIndex from "model/MonthIndex";
import NewsArticle from "model/news/NewsArticle";

const MayflowerDoorBadgesNewsArticleFrom21stMay2021: NewsArticle = {
    id: "7f4be1af-507b-484d-af3a-0b5a1c372b88",
    metadata: {
        title: "Mayflower Door Badges",
        subtitle: "Anyone keen?",
        authorId: "3d8c2fcc-8bea-45aa-8322-89760ece82dc",
        date: new Date(2021, MonthIndex.May, 21)
    },
    content: [
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Paul has contacted me to say that he can get some Mayflower door badges made. They would sell for £25 each + p&p."
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "He would like members to let him know if you would buy at this price and, if so, how many so that he can ascertain demand before he orders."
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [
                    {
                        type: "plainText",
                        content: "If you would like to pre-order, then let Paul know at: "
                    },
                    {
                        type: "inlineElement",
                        content: {
                            type: "anchor",
                            emailUri: {
                                scheme: "mailto",
                                parts: {
                                    email: "pburgess1956@gmail.com",
                                    query: { subject: "Mayflower Door Badges" }
                                }
                            },
                            children: [{
                                type: "plainText",
                                content: "pburgess1956@gmail.com"
                            }]
                        }
                    }
                ]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{ type: "plainText", content: "Rob" }]
            }
        }
    ]
};

export default MayflowerDoorBadgesNewsArticleFrom21stMay2021;
