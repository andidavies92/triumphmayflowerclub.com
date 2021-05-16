import { CSSProperties } from "react";

interface ImageCaptionProps { text: string; }

const style: CSSProperties = {
    marginTop: 7,
    textAlign: "center",
    fontSize: "9pt",
    fontWeight: "bold"
};

const ImageCaption = ({ text }: ImageCaptionProps) => <p style={style}>{text}</p>;

export default ImageCaption;
