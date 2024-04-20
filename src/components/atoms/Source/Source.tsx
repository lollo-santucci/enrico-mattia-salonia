import "./Source.style.css"

interface SourceProps {
    content: string;
}

const Source: React.FC<SourceProps> = ({ content }) => {
    return (
        <div className="source">
            <p className="source-content justify">{content}</p>
        </div>
    );
};

export default Source;
