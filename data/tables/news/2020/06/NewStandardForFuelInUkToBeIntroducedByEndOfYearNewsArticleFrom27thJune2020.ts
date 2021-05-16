import MonthIndex from "model/MonthIndex";
import NewsArticle from "model/news/NewsArticle";

const NewStandardForFuelInUkToBeIntroducedByEndOfYearNewsArticleFrom27thJune2020: NewsArticle = {
    id: "5d6b03b4-2a6c-44e7-b7bd-d58381cb6d29",
    metadata: {
        title: "New Standard for Fuel in UK to Be Introduced by End of Year",
        subtitle: "E10 will not be compatible with classic cars",
        authorId: "3d8c2fcc-8bea-45aa-8322-89760ece82dc",
        date: new Date(2020, MonthIndex.June, 27)
    },
    content: [
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [
                    {
                        type: "plainText",
                        content: "By the end of the year, "
                    },
                    {
                        type: "inlineElement",
                        content: {
                            type: "emphasis",
                            children: [{ type: "plainText", content: "E10" }]
                        }
                    },
                    {
                        type: "plainText",
                        content: " will be introduced in the UK. This is a fuel with 10% of bioethanol, designed to cut 750,000 tonnes of CO"
                    },
                    {
                        type: "inlineElement",
                        content: {
                            type: "subscript",
                            children: [{ type: "plainText", content: "2" }]
                        }
                    },
                    {
                        type: "plainText",
                        content: " from emissions. As E10 is not suitable for the majority of classic cars, the government are planning to ensure that an alternative, E5 is provided alongside E10, to give our cars a suitable fuel. A consultation was launched in March. A "
                    },
                    {
                        type: "inlineElement",
                        content: {
                            type: "anchor",
                            pageUri: { parts: { path: "/news/2020/06/newstandardforfuelinuktobeintroducedbyendofyear/pressrelease.pdf" } },
                            children: [{ type: "plainText", content: "press release from the FBHVC" }]
                        }
                    },
                    {
                        type: "plainText",
                        content: " outlines their concerns. We will keep you updated with further news as we get it."
                    }
                ]
            }
        }
    ]
};

export default NewStandardForFuelInUkToBeIntroducedByEndOfYearNewsArticleFrom27thJune2020;
