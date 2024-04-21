import "./Author.style.css"

interface AuthorProps {
    author?: string;
    link?: string;
}

const Author: React.FC<AuthorProps> = ({ author = "Author" , link = "link" }) => {
    return <a className="co-author text-s" href={link} target="_blank">{author}</a>;
};

export default Author;
