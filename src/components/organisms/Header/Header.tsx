import Logo from "../../atoms/Logo/Logo";
import Nav from "../../molecules/Nav/Nav";
import "./Header.style.css";

const Header: React.FC = () => {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    );
}

export default Header;
