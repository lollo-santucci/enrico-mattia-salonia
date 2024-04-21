import IconButton from "@/components/atoms/IconButton/IconButton";
import "./Class.style.css";

interface ClassProps {
    title: string;
}

const Class: React.FC<ClassProps> = ({ title }) => {
    return (
        <div className="class">
            <div className="actions">
                <IconButton icon="magnifying-glass" />
                <IconButton icon="file-pdf" />
            </div>
            <h2 className="class-title text-m">{title}</h2>
        </div>
    );
};

export default Class;
