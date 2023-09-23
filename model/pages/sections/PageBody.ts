import CustomPageBodyEnumeration from "data/database/pages/sections/CustomPageBodyEnumeration";
import PageSectionType from "model/pages/sections/PageSectionType";
import RichText from "model/text/RichText";

export default interface PageBody {
    type: PageSectionType;
    content: RichText | CustomPageBodyEnumeration;
}

export interface RichTextPageBody extends PageBody {
    type: "rich text";
    content: RichText;
}

export interface CustomPageBody extends PageBody {
    type: "custom";
    content: CustomPageBodyEnumeration;
}
