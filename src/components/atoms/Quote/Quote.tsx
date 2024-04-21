import "./Quote.style.css";

interface QuoteProps {
    content: string;
}

const Quote: React.FC<QuoteProps> = ({ content }) => {
    return (
        <div>
            <p className="quote-content justify text-m">{content}</p>
        </div>
    );
};

export default Quote;
