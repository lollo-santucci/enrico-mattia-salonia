import "./Source.style.css"

interface SourceProps {
    content: string;
}

const Source: React.FC<SourceProps> = ({ content }) => {
    return (
        <div className="source">
            <p className="source-content justify text-s">{content}</p>
        </div>
    );
};

export default Source;
