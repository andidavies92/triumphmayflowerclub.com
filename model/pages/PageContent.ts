import PageBody from "model/pages/sections/PageBody";
import PageSidebar from "model/pages/sections/PageSidebar";

export default interface PageContent {
    body: PageBody;
    sidebar?: PageSidebar;
}
