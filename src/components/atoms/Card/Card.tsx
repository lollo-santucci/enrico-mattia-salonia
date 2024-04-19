import "./Card.style.css";

interface CardProps {
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {
    return (
        <section className="card">
            {children}
        </section>
    );
}

export default Card;
