import "./SectionTitle.style.css";

interface SectionTitleProps {
  text?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text = "Title" }) => {
  return <h2 className="section-title text-xl">{text}</h2>;
};

export default SectionTitle;
