import Image from "next/image";
import "./Footer.style.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <section className="footer-content">
            <p className="text-xs">Enrico Mattia Salonia</p>
            <p className="text-xs">contacts:&nbsp;
                <a className="text-xs" href="mailto:mattia.salonia@tse.fr">mattia.salonia@tse.fr</a>,&nbsp;
                <a className="text-xs" href="mailto:mattia.salonia1@gmail.com">mattia.salonia1@gmail.com</a>
            </p>
            <a href="https://www.tse-fr.eu/" target="_blank" rel="noopener noreferrer">
                <Image src="/img/tse.svg" alt="TSE logo" width={42.6} height={15} quality={100}/>
            </a>
        </section>
    </footer>
  );
};

export default Footer;
