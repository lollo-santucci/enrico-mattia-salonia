import "./IconLink.style.css";

interface IconLinkProps {
  icon: string;
  link?: string;
  target?: string;
}

const IconLink: React.FC<IconLinkProps> = ({ icon, link , target = "_blank" }) => {
  const isActive = link ? "" : " closed";
  return <a className={"icon-link" + isActive} href={link} target={target}><i className = {icon}></i></a>;
};

export default IconLink;
