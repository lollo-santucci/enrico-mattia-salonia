import "./CardContent.style.css"

interface CardContentProps {
    state?: string;
    children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ state, children }) => {
  return <div className={"card-content " + state}>{children}</div>;
};

export default CardContent;
