import "./Link.style.css";

interface LinkProps {
    href?: string;
    text?: string;
}

const Link: React.FC<LinkProps> = ({ href = "link", text = "click here" }) => {
    return (
        <a className="link" href={href} target="_blank">{text}</a>
    );
}

export default Link;
