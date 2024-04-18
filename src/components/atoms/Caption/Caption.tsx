import "./Caption.style.css";

interface CaptionProps {
    text?: string;
}

const Caption: React.FC<CaptionProps> = ({ text = "Caption" }) => {
    return (
        <p className="caption"> {text} </p>
    );
}

export default Caption;
