import "./NavItem.style.css";

interface NavItemProps {
    active?: boolean;
    text?: string;
    href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ active = false, text = "NavItem", href = "#" }) => {
    return (
        <a 
        href = {href}
        className = {`nav-item ${active ? "active" : ""}`}
        > {text} </a>
    );
}

export default NavItem;
