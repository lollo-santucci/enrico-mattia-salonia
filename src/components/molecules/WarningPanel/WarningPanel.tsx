import Link from "../../atoms/Link/Link";
import "./WarningPanel.style.css"

interface WarningPanelProps {
    title: string;
    content: string;
    link?: string;
    linktext?: string;
}

const WarningPanel: React.FC<WarningPanelProps> = ({ title, content, link, linktext }) => {
    return (
        <div className="warning-panel">
            <h2 className="warning-panel-title">{title}</h2>
            <p className="warning-panel-content">{content}</p>
            {link && <Link href={link} text={linktext} />}
        </div>
    );
};

export default WarningPanel;
