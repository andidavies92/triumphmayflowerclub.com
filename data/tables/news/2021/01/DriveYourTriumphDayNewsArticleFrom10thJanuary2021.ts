import MonthIndex from "model/MonthIndex";
import NewsArticle from "model/news/NewsArticle";

const DriveYourTriumphDayNewsArticleFrom10thJanuary2021: NewsArticle = {
    id: "e7903eb1-998d-459c-ab93-ac110a279bff",
    metadata: {
        title: "Drive Your Triumph Day",
        subtitle: [
            { type: "plainText", content: "Wednesday 10" },
            {
                type: "inlineElement",
                content: {
                    type: "superscript",
                    children: [{ type: "plainText", content: "th" }]
                }
            },
            { type: "plainText", content: " February 2021" }
        ],
        authorId: "8e61cb21-a316-4e91-81a9-90e0a826cc5d",
        date: new Date(2021, MonthIndex.January, 10)
    },
    content: [
        {
            type: "blockElement",
            content: {
                type: "paragraph",
                children: [{
                    type: "plainText",
                    content: "It’s that time again, Drive Your Triumph Day 2021. The concept is simple: on this day, drive your Mayflower, take a photo and submit it. Even if you can’t drive your car for whatever reason, then take a photo with you and the car and send it in. If you submit a photo to DYTD, then be sure to send Rob and Barbara a copy for club members to see."
                }]
            }
        },
        {
            type: "blockElement",
            content: {
                type: "blockQuote",
                children: [
                    {
                        type: "blockElement",
                        content: {
                            type: "paragraph",
                            children: [{
                                type: "plainText",
                                content: "“Dear Fellow Triumph Owner,"
                            }]
                        }
                    },
                    {
                        type: "blockElement",
                        content: {
                            type: "paragraph",
                            children: [{
                                type: "plainText",
                                content: "One thing that has remained constant in this crazy pandemic year is the pleasure to social distance by taking a drive in your Triumph. So, with that in mind, it’s time to plan a social distance activity for Drive Your Triumph Day, February 10, 2021."
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
                                    content: "My name is Rye Livingston and I’m with the Triumph Travelers Sports Car Club in Northern California, which is celebrating our 62"
                                },
                                {
                                    type: "inlineElement",
                                    content: {
                                        type: "superscript",
                                        children: [{ type: "plainText", content: "nd" }]
                                    }
                                },
                                {
                                    type: "plainText",
                                    content: " anniversary."
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
                                    content: "As you may remember, a number of years ago I encouraged members of our club to drive their Triumphs on February 10"
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
                                    content: ", to celebrate Sir John Black’s Birthday, the man who organized Standard’s purchase of Triumph after the war, and went on to make the cars we enjoy driving today."
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
                                content: "Last year I received about 350 photos from all over the world: Scotland, Ireland, the UK, New Zealand, Australia, South Africa, Uruguay, Netherlands, Switzerland, Finland, Canada, Holland, Czech Republic, and of course all over the USA. I’m hoping we can increase that number this year!"
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
                                    content: "The concept is straightforward. On Wednesday, February 10"
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
                                    content: ", go for a drive in your Triumph. Take a scenic drive on a country road or out to lunch, to the market, to work, wherever. Go for a drive alone or in a big group from your local Triumph Club. Take your spouse, buddy, child, grandchild or your dog; then take a photo. The photo is mainly of the car, and the owner if possible, ideally in front of a cool spot, landmark, scenic view or in your driveway. If it’s the middle of the winter where you live and your car is in hibernation, or in the middle of a restoration, take a photo of it anyway."
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
                                    content: "Next step is to email a high-resolution photo to "
                                },
                                {
                                    type: "inlineElement",
                                    content: {
                                        type: "anchor",
                                        emailUri: {
                                            scheme: "mailto",
                                            parts: { email: "driveyourtriumphday@gmail.com" }
                                        },
                                        children: [{
                                            type: "plainText",
                                            content: "driveyourtriumphday@gmail.com"
                                        }]
                                    }
                                },
                                {
                                    type: "plainText",
                                    content: ", along with some basic information: owner’s name, year and model of car, and place photo was taken (city, state, country). The photos will then be published not only in our club newsletter, but also in USA’s national magazine: Vintage Triumph Registry, and on the Drive Your Triumph Day website: "
                                },
                                {
                                    type: "inlineElement",
                                    content: {
                                        type: "anchor",
                                        websiteUri: {
                                            scheme: "https",
                                            parts: { host: "driveyourtriumphday.shutterfly.com" }
                                        },
                                        children: [{
                                            type: "plainText",
                                            content: "https://driveyourtriumphday.shutterfly.com/"
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
                            children: [{
                                type: "plainText",
                                content: "Please feel free to send this on to other Triumph clubs you may know of, and your club activities chairman and newsletter editor. Last year a few Standard Clubs joined in too, which is great."
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
                                    content: "Be sure to contact me with any questions you may have, and thank you in advance for getting the message out to your members and friends to Drive Their Triumphs on February 10"
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
                                type: "inlineElement",
                                content: {
                                    type: "emphasis",
                                    children: [{ type: "plainText", content: "Rye Livingston" }]
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
                                content: "Triumph Travelers Sports Car Club (1960 Triumph TR3A)"
                            }]
                        }
                    },
                    {
                        type: "blockElement",
                        content: {
                            type: "paragraph",
                            children: [
                                {
                                    type: "inlineElement",
                                    content: {
                                        type: "strong",
                                        children: [{ type: "plainText", content: "Mobile:" }]
                                    }
                                },
                                { type: "plainText", content: " " },
                                {
                                    type: "inlineElement",
                                    content: {
                                        type: "anchor",
                                        phoneUri: {
                                            scheme: "tel",
                                            parts: { phone: "+15303463793" }
                                        },
                                        children: [{ type: "plainText", content: "530-FIND-RYE" }]
                                    }
                                },
                                { type: "plainText", content: "”" }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};

export default DriveYourTriumphDayNewsArticleFrom10thJanuary2021;
