import Link from "../Link/Link";
import "./Abstract.style.css"

interface AbstractProps {
    content: string;
    availability?: string;
    link?: string;
}

const Abstract: React.FC<AbstractProps> = ({ content, availability = "Preliminary draft available upon request", link = "mailto:mattia.salonia1@gmail.com" }) => {
    return (
        <div className="abstract">
            <h5 className="abstract-title">Abstract</h5>
            <p className="abstract-content justify">{content}</p>
            <p className="abstract-availability">{<Link text={availability} href={link} />}</p>
        </div>
    );
};

export default Abstract;
