import "./Abstract.style.css"

interface AbstractProps {
    content: string;
    availability?: string;
}

const Abstract: React.FC<AbstractProps> = ({ content, availability = "upon request" }) => {
    return (
        <div className="abstract">
            <h5 className="abstract-title">Abstract</h5>
            <p className="abstract-content justify">{content}</p>
            <p className="abstract-availability">[Preliminary draft available {availability}]</p>
        </div>
    );
};

export default Abstract;
