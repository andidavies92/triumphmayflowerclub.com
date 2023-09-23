import MonthIndex from "model/MonthIndex";
import NewsArticle from "model/news/NewsArticle";

const TriumphMayflowerClubAnnualRally2021NewsArticleFrom21stAugust2021: NewsArticle = {
    id: "abd4ac23-8db3-48af-baf3-9a5109ea318a",
    metadata: {
        title: "Triumph Mayflower Club Annual Rally 2021",
        subtitle: [
            { type: "plainText", content: "Delayed annual rally to take place on 17" },
            {
                type: "inlineElement",
                content: {
                    type: "superscript",
                    children: [{ type: "plainText", content: "th" }]
                }
            },
            { type: "plainText", content: " October" }
        ],
        authorId: "3d8c2fcc-8bea-45aa-8322-89760ece82dc",
        date: new Date(2021, MonthIndex.August, 21)
    },
    content: [
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{ type: "plainText", content: "To take place at Foxton Locks, Market Harborough." }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [
                    {
                        type: "plainText",
                        content: "If you intend to bring your Mayflower please let rally secretary John Banks know ASAP on "
                    },
                    {
                        type: "inlineElement",
                        content: {
                            type: "anchor",
                            emailUri: {
                                scheme: "mailto",
                                parts: {
                                    email: "liljohn789@hotmail.co.uk",
                                    query: { subject: "TMC Annual Rally 2021" }
                                }
                            },
                            children: [{ type: "plainText", content: "liljohn789@hotmail.co.uk" }]
                        }
                    },
                    { type: "plainText", content: "." }
                ]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "For further details, visit to the rallies page in the events section:"
                }]
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
                        pageUri: { parts: { path: "/events/rallies" } },
                        children: [{ type: "plainText", content: "TMC Rallies" }]
                    }
                }]
            }
        }
    ]
};

export default TriumphMayflowerClubAnnualRally2021NewsArticleFrom21stAugust2021;
