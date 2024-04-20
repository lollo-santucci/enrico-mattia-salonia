import IconButton from "@/components/atoms/IconButton/IconButton";
import Quote from "@/components/atoms/Quote/Quote";
import Source from "@/components/atoms/Source/Source";
import "./Citation.style.css";

interface CitationProps {
    quote: string;
    source: string;
}

const Citation: React.FC<CitationProps> = ({ quote, source }) => {
    return (
        <div className="citation">
            <div className="quote-icon">
                <IconButton icon="quote" />
            </div>
            <div className="citation-content">
                <Quote content={quote} />
                <Source content={source} />
            </div>
        </div>
    );
};

export default Citation;
