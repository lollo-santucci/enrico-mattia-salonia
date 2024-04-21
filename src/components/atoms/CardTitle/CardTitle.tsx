import "./CardTitle.style.css";

interface CardTitleProps {
  title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title = "Title" }) => {
  return <h3 className="card-title text-m">{title} </h3>;
};

export default CardTitle;
