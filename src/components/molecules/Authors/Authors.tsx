import React from "react";
import Author from "@/components/atoms/Author/Author";
import "./Authors.style.css"

interface AuthorsProps {
  authors: string;
  links?: string;
}

const Authors: React.FC<AuthorsProps> = ({ authors = "Author, Author", links }) => {
  // Split authors and links into arrays and build the authors list and aggregate the authors with a comma and a space  
  const authorsArray = authors.split(", ");
  const linksArray = links?.split(", ");
  // Map the authors and links into the Author component separated by a comma and a space
  const authorsList = authorsArray.map((author, index) => {
    return (
      <React.Fragment key={index}>
        <Author author={author} link={linksArray && linksArray[index]} />
        {index !== authorsArray.length - 1 && ", "}
      </React.Fragment>
    );
  });
  return <div className="authors">(with {authorsList})</div>;

};

export default Authors;
