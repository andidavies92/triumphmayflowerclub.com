import PageBody from "model/page/sections/PageBody";
import PageSidebar from "model/page/sections/PageSidebar";

export default interface PageContent {
    body: PageBody;
    sidebar?: PageSidebar;
}
