import "./Link.style.css";

interface LinkProps {
    href?: string;
    text?: string;
    size?: string;
}

const Link: React.FC<LinkProps> = ({ href = "link", text = "click here", size = "text-l" }) => {
    return (
        <a className={"link "+ size} href={href} target="_blank">{text}</a>
    );
}

export default Link;
