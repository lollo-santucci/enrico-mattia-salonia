import "./QUote.style.css";

interface QuoteProps {
    content: string;
}

const Quote: React.FC<QuoteProps> = ({ content }) => {
    return (
        <div>
            <p className="quote-content justify">{content}</p>
        </div>
    );
};

export default Quote;
