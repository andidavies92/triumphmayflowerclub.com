import MonthIndex from "model/MonthIndex";
import NewsArticle from "model/news/NewsArticle";

const ClubAgm2022NewsArticleFrom22ndJanuary2022: NewsArticle = {
    id: "b79a0366-5764-451b-b137-cd7cdaf81c94",
    metadata: {
        title: "Club AGM 2022",
        subtitle: [
            { type: "plainText", content: "Sunday 13" },
            {
                type: "inlineElement",
                content: {
                    type: "superscript",
                    children: [{ type: "plainText", content: "th" }]
                }
            },
            { type: "plainText", content: " March" }
        ],
        authorId: "8e61cb21-a316-4e91-81a9-90e0a826cc5d",
        date: new Date(2022, MonthIndex.January, 22)
    },
    content: [
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "inlineElement",
                    content: {
                        type: "strong",
                        children: [{ type: "plainText", content: "Details:" }]
                    }
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "list",
                listType: "unordered",
                children: [
                    {
                        type: "blockElement",
                        content: {
                            type: "listItem",
                            children: [{
                                type: "plainText",
                                content: "Venue – Triumph Sports Six Club, Main Street, Lubenham, Market Harborough, Leicestershire, LE16 9TF."
                            }]
                        }
                    },
                    {
                        type: "blockElement",
                        content: {
                            type: "listItem",
                            children: [{
                                type: "plainText",
                                content: "The TSSC HQ will be open from 11:45 AM."
                            }]
                        }
                    },
                    {
                        type: "blockElement",
                        content: {
                            type: "listItem",
                            children: [{
                                type: "plainText",
                                content: "Venue – Triumph Sports Six Club, Main Street, Lubenham, Market Harborough, Leicestershire, LE16 9TF."
                            }]
                        }
                    },
                    {
                        type: "blockElement",
                        content: {
                            type: "listItem",
                            children: [{
                                type: "plainText",
                                content: "Venue – Triumph Sports Six Club, Main Street, Lubenham, Market Harborough, Leicestershire, LE16 9TF."
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
                children: [
                    {
                        type: "plainText",
                        content: "It would be helpful if members who are intending to attend would let John Corley know in advance to help with arranging seating and refreshments: "
                    },
                    {
                        type: "inlineElement",
                        content: {
                            type: "anchor",
                            emailUri: {
                                scheme: "mailto",
                                parts: {
                                    email: "j.r.corley@btinternet.com",
                                    query: { subject: "TMC 2022 AGM" }
                                }
                            },
                            children: [{ type: "plainText", content: "j.r.corley@btinternet.com" }]
                        }
                    },
                    { type: "plainText", content: "." }
                ]
            }
        },
        {
            type: "emptyElement",
            content: {
                type: "image",
                imageId: "c5e942c0-9567-492c-bff5-6e043d8c30f8",
                width: "fullWidth"
            }
        }
    ]
};

export default ClubAgm2022NewsArticleFrom22ndJanuary2022;
