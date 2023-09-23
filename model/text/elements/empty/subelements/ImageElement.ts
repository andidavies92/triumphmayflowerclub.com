import Guid from "types/Guid";
import HorizontalAlignment from "types/alignment/HorizontalAlignment";
import PlainText from "types/PlainText";
import TextWithOptionalSuperscriptAndOrSubscript from "model/text/TextWithOptionalSuperscriptAndOrSubscript";

import { BaseEmptyElement } from "model/text/elements/empty/EmptyElement";

export type ImageElementType = "image";

interface BaseImageElement extends BaseEmptyElement {
    type: ImageElementType;
    imageId: Guid;
    width: number | "fullWidth";
    caption?: PlainText | TextWithOptionalSuperscriptAndOrSubscript;
}

interface FullWidthImageElement extends BaseImageElement { width: "fullWidth"; }
interface FixedWidthImageElement extends BaseImageElement {
    width: number;
    alignment?: HorizontalAlignment;
}

type ImageElement = FullWidthImageElement | FixedWidthImageElement;

export default ImageElement;
