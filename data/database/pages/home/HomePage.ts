import CustomPageBodyEnumeration from "data/database/pages/sections/CustomPageBodyEnumeration";
import CustomPageSidebarEnumeration from "data/database/pages/sections/CustomPageSidebarEnumeration";
import Page from "model/pages/Page";
import WebsiteSection from "model/WebsiteSection";

const HomePage: Page = {
    metadata: {
        section: WebsiteSection.About,
        title: "Home"
    },
    content: {
        body: {
            type: "custom",
            content: CustomPageBodyEnumeration.Home
        },
        sidebar: {
            type: "custom",
            content: CustomPageSidebarEnumeration.Home
        }
    }
};

export default HomePage;
