import "./PageSection.style.css";

interface PageSectionProps {
  children: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({ children }) => {
  return <section className="page-section">{children}</section>;
};

export default PageSection;
