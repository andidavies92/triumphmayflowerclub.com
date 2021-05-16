import CustomPageSidebarEnumeration from "data/pages/sections/CustomPageSidebarEnumeration";
import PageSectionType from "model/pages/sections/PageSectionType";
import RichText from "model/text/RichText";

export default interface PageSidebar {
    type: PageSectionType;
    content: RichText | CustomPageSidebarEnumeration;
}

export interface RichTextPageSidebar extends PageSidebar {
    type: "rich text";
    content: RichText;
}

export interface CustomPageSidebar extends PageSidebar {
    type: "custom";
    content: CustomPageSidebarEnumeration;
}
