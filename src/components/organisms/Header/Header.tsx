"use client";
import Logo from "../../atoms/Logo/Logo";
import Nav from "../../molecules/Nav/Nav";
import IconButton from "@/components/atoms/IconButton/IconButton";
import Card from "@/components/atoms/Card/Card";
import React, { useState } from 'react';
import useWindowDimensions from "@/hooks/useWindowDimensions";
import "./Header.style.css";

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const navClass = width && width < 800 ? "closed" : "";
  const iconClass = width && width < 800 ? "" : "closed";

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section className="menu">
      <header className="header">
        <Logo />
        <div>
          <div className={navClass}>
            <Nav />
          </div>
          <div className={iconClass}>
            <IconButton icon={isOpen ? "close" : "hamburger"} onClick={toggleOpen}/>
          </div>
        </div>
      </header>
      <div className= {isOpen ? "menu-open" : "closed"}>
        <Card>
          <Nav dir="col"/>
        </Card>
      </div>
    </section>
  );
};

export default Header;
