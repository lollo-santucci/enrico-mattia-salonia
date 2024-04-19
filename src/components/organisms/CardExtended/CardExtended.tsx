'use client';
import React, { useState } from 'react';
import Card from "@/components/atoms/Card/Card";
import CardTitleExtended from "@/components/molecules/CardTitleExtended/CardTitleExtended";
import Abstract from "@/components/atoms/Abstract/Abstract";
import IconButton from "@/components/atoms/IconButton/IconButton";
import CardHeading from "@/components/molecules/CardHeading/CardHeading";
import CardContent from "@/components/molecules/CardContent/CardContent";
import "./CardExtended.style.css";

interface CardExtendedProps {
  title: string;
  authors?: string;
  links?: string;
  abstract: string;
}

const CardExtended: React.FC<CardExtendedProps> = ({title = "Card Title", authors, links, abstract}) => {
  // State to track whether the card is open or closed
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the open/close state of the card
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Card>
          <CardHeading>
            <CardTitleExtended title={title} authors={authors} links={links}/>
            <IconButton icon={isOpen ? "caret-up" : "caret-down"} onClick={toggleOpen}/>
          </CardHeading>
          <CardContent state={isOpen ? "" : "closed"}>
            <Abstract content={abstract}/>
          </CardContent>
        </Card>
  );
};

export default CardExtended;
