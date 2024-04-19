import CardTitle from "@/components/atoms/CardTitle/CardTitle";
import Authors from "../Authors/Authors";
import "./CardTitleExtended.style.css"

interface CardTitleExtendedProps {
    title: string;
    authors?: string;
    links?: string;
}

const CardTitleExtended: React.FC<CardTitleExtendedProps> = ({ title = "Card Title", authors, links }) => {
  return(
    <div className="card-title-extended">
        <CardTitle title={title}/>
        {authors && <Authors authors={authors} links={links}/>}
    </div>
  );
};

export default CardTitleExtended;
