import PlainText from "types/PlainText";
import TextWithOptionalSuperscriptAndOrSubscript from "model/text/TextWithOptionalSuperscriptAndOrSubscript";

import { CSSProperties } from "react";
import RenderedRichText from "./RenderedRichText";

interface ImageCaptionProps { text: PlainText | TextWithOptionalSuperscriptAndOrSubscript; }

const style: CSSProperties = {
    marginTop: 7,
    textAlign: "center",
    fontSize: "9pt",
    fontWeight: "bold"
};

const ImageCaption = ({ text }: ImageCaptionProps) => (
    <p style={style}>
        <RenderedRichText data={text} /> 
    </p>
);

export default ImageCaption;
