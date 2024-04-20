import TextSimple from "@/components/atoms/TextSimple/TextSimple";
import Citation from "@/components/molecules/Citation/Citation";
import "./QuoteSection.style.css";

interface QuoteSectionProps {
    quote: string;
    source: string;
    comment?: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote, source, comment }) => {
    return (
        <div className="quote-section">
            <Citation quote={quote} source={source} />
            {comment && <TextSimple content={comment} />}
            <div className="divider">
                <hr />
            </div>
        </div>
    );
};

export default QuoteSection;
