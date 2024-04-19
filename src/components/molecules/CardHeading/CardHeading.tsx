import "./CardHeading.style.css"

interface CardHeadingProps {
  children: React.ReactNode;
}

const CardHeading: React.FC<CardHeadingProps> = ({ children }) => {
  return <div className="card-heading">{children}</div>;
};

export default CardHeading;
