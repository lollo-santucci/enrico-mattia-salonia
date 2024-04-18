import Image from "next/image";
import Caption from "../../atoms/Caption/Caption";
import "./Img.style.css";

interface ImgProps {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    caption?: string;
}

const Img: React.FC<ImgProps> = ({ src = "image", alt = "image", width = 100, height = 100, caption = "Caption" }) => {
    return (
        <section className="img-container">
            <Image className="img" src={src} alt={alt} width={width} height={height} />
            <Caption text={caption} />
        </section>
    );
}

export default Img;
