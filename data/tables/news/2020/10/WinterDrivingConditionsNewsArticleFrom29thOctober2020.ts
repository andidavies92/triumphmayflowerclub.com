import MonthIndex from "model/MonthIndex";
import NewsArticle from "model/news/NewsArticle";

const WinterDrivingConditionsNewsArticleFrom29thOctober2020: NewsArticle = {
    id: "fa6e9806-7275-46ca-ae8c-c34d0778e77a",
    metadata: {
        title: "Winter Driving Conditions",
        subtitle: "A guide to staying safe on the roads in winter",
        authorId: "3d8c2fcc-8bea-45aa-8322-89760ece82dc",
        date: new Date(2020, MonthIndex.October, 29)
    },
    content: [
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [
                    {
                        type: "plainText",
                        content: "Neil Henderson, working for Hendy Car and Van Store has sent us a very helpful "
                    },
                    {
                        type: "inlineElement",
                        content: {
                            type: "strong",
                            children: [{ type: "plainText", content: "winter driving conditions" }]
                        }
                    },
                    {
                        type: "plainText",
                        content: " article – see link:"
                    }
                ]
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
                            parts: {
                                host: "www.hendycarstore.co.uk",
                                path: "/staying-safe-on-uk-roads-this-winter"
                            }
                        },
                        children: [{ type: "plainText", content: "https://www.hendycarstore.co.uk/staying-safe-on-uk-roads-this-winter" }]
                    }
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Although most of us put our Mayflowers into hibernation come the Autumn, the information enclosed in the link is equally useful for driving our modern cars. Have a look and see what facts are new to you!"
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Happy (and safe) motoring,"
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Rob"
                }]
            }
        }
    ]
};

export default WinterDrivingConditionsNewsArticleFrom29thOctober2020;
