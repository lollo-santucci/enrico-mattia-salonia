'use client';
import NavItem from "../../atoms/NavItem/NavItem";
import { usePathname } from "next/navigation";
import "./Nav.style.css";

const Nav: React.FC = () => {
    const pathname = usePathname();
    // create a nav item responsive, when the screen is small, the nav item will be hidden and replaced with an hamburger icon thath open a modal with the nav items
    

    return (
        <nav className="nav">
            <NavItem text="Home" href="/" active={pathname === "/"} />
            <NavItem text="Research" href="/research" active={pathname === "/research"} />
            <NavItem text="Teaching" href="/teaching" active={pathname === "/teaching"} />
            <NavItem text="Quotes" href="/quotes" active={pathname === "/quotes"} />
        </nav>
    );
}

export default Nav;
