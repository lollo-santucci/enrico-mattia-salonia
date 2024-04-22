import IconLink from "@/components/atoms/IconLink/IconLink";
import "./Class.style.css";

interface ClassProps {
    title: string;
    linkToDoc?: string;
    linkToPdf?: string;
}

const Class: React.FC<ClassProps> = ({ title, linkToDoc, linkToPdf }) => {

    return (
        <div className="class">
            <div className="actions">
                <IconLink icon="magnifying-glass" link={linkToDoc} target="_self"/>
                <IconLink icon="file-pdf" link={linkToPdf} />
            </div>
            <h2 className="class-title text-m">{title}</h2>
        </div>
    );
};

export default Class;
