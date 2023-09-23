import MonthIndex from "model/MonthIndex";
import NewsArticle from "model/news/NewsArticle";

const StandardTriumphPicnicAndHogRoastNewsArticleFrom31stJanuary2021: NewsArticle = {
    id: "15cd9875-419f-46a5-8142-32e63ee584c1",
    metadata: {
        title: "Standard Triumph Picnic and Hog Roast",
        subtitle: [
            { type: "plainText", content: "Sunday 9" },
            {
                type: "inlineElement",
                content: {
                    type: "superscript",
                    children: [{ type: "plainText", content: "th" }]
                }
            },
            { type: "plainText", content: " May 2021" }
        ],
        authorId: "b314ca8e-bbe4-42cf-85a5-d97d8551aea4",
        date: new Date(2021, MonthIndex.January, 31)
    },
    content: [
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Please see the following leaflet about the upcoming picnic being held for Triumph, Standard, and Standard Triumph car owners. Obviously this may yet be cancelled due to the ongoing pandemic, but we can remain hopeful!"
                }]
            }
        },
        {
            type: "emptyElement",
            content: {
                type: "image",
                imageId: "4150d68a-8f49-4a1e-82bd-4019bb2ea929",
                width: "fullWidth"
            }
        }
    ]
};

export default StandardTriumphPicnicAndHogRoastNewsArticleFrom31stJanuary2021;
