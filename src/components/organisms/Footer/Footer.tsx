import Image from "next/image";
import "./Footer.style.css";
import Credits from "@/components/molecules/Credits/Credits";

const Footer: React.FC = () => {
  return (
    <footer className="footer flex flex-col md:flex-row justify-start mb-2">
        <section>  <Credits /> </section>
        <section className="footer-content hidden">
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
