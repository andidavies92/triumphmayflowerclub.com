import MonthIndex from "model/MonthIndex";
import NewsArticle from "model/news/NewsArticle";

const ReminderDriveYourTriumphDayNewsArticleFrom7thFebruary2022: NewsArticle = {
    id: "33ae0517-d3e9-4d93-b953-e90c813a586b",
    metadata: {
        title: "Reminder – Drive Your Triumph Day",
        subtitle: [
            { type: "plainText", content: "February 10" },
            {
                type: "inlineElement",
                content: {
                    type: "superscript",
                    children: [{ type: "plainText", content: "th" }]
                }
            }
        ],
        authorId: "8e61cb21-a316-4e91-81a9-90e0a826cc5d",
        date: new Date(2022, MonthIndex.February, 7)
    },
    content: [
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Dear fellow Triumph owner,"
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
                        content: "Drive Your Triumph Day is coming-up soon on Thursday, February 10"
                    },
                    {
                        type: "inlineElement",
                        content: {
                            type: "superscript",
                            children: [{ type: "plainText", content: "th" }]
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
                children: [
                    {
                        type: "plainText",
                        content: "The concept for DYTD is straightforward: go for a drive in your Triumph on February 10"
                    },
                    {
                        type: "inlineElement",
                        content: {
                            type: "superscript",
                            children: [{ type: "plainText", content: "th" }]
                        }
                    },
                    {
                        type: "plainText",
                        content: ". Take a scenic drive on a country road or out to lunch, to the market, to work, wherever. Go for a drive alone or in a big group from your local Triumph Club. Take your spouse, buddy, child, grandchild, or your dog; then take a photo."
                    }
                ]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "The photo is mainly of the car, and the owner or passenger, if possible, ideally in front of a cool spot, landmark, scenic view, or in your driveway. If it’s the middle of the winter where you live and your car is in hibernation, or in the middle of a restoration, take a photo of it in the garage. Have fun with it."
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
                        content: "Next step is to email a high-resolution photo to "
                    },
                    {
                        type: "inlineElement",
                        content: {
                            type: "anchor",
                            emailUri: {
                                scheme: "mailto",
                                parts: {
                                    email: "driveyourtriumphday@gmail.com",
                                    query: { subject: "DYTD 2022" }
                                }
                            },
                            children: [{ type: "plainText", content: "driveyourtriumphday@gmail.com" }]
                        }
                    },
                    {
                        type: "plainText",
                        content: ", along with some basic information: owner’s name, year and model of car, and place photo was taken (city, state, country), and if you have an interesting story about the car, include that too."
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
                        content: "The photos will then be published not only in our club newsletter, but also in USA’s national magazine: Vintage Triumph Registry, and on the Drive Your Triumph Day website: "
                    },
                    {
                        type: "inlineElement",
                        content: {
                            type: "anchor",
                            websiteUri: {
                                scheme: "https",
                                parts: { host: "driveyourtriumphday.shutterfly.com" }
                            },
                            children: [{ type: "plainText", content: "https://driveyourtriumphday.shutterfly.com/" }]
                        }
                    },
                    {
                        type: "plainText",
                        content: ". I can also make photos available for other clubs to publish in their newsletter."
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
                        content: "Be sure to contact me with any questions you may have, and remember, send photos there are only taken on February 10"
                    },
                    {
                        type: "inlineElement",
                        content: {
                            type: "superscript",
                            children: [{ type: "plainText", content: "th" }]
                        }
                    },
                    {
                        type: "plainText",
                        content: ", Drive Your Triumph Day."
                    }
                ]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Regards,"
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Rye Livingston"
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Activities Chairman"
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Triumph Travelers Sports Car Club"
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "1960 Triumph TR3A"
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "Mobile: 530-FIND-RYE"
                }]
            }
        }
    ]
};

export default ReminderDriveYourTriumphDayNewsArticleFrom7thFebruary2022;
