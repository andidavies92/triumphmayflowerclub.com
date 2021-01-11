import Page from "model/page/Page";

const ExamplePage: Page = {
    metadata: {
        title: "Page Title",
        author: {
            name: {
                forename: "Forename",
                middleNames: [
                    "Middlename-1",
                    "Middlename-2",
                    "Middlename-3"
                ],
                surname: "Surname"
            },
            membershipNumber: 123
        }
    },
    content: { temp: "Temp" }
};

export default ExamplePage;
