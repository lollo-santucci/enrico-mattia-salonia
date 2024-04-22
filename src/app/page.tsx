'use client';
import Img from "@/components/molecules/Img/Img";
import Link from "@/components/atoms/Link/Link";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Home() {
  const { width } = useWindowDimensions();
  const mainClass = width && width < 800 ? "main col" : "main row";
  const imgWidth = width && width < 800 ? 300 : 600;

  return (
    <main className={mainClass}>
      <Img
        src="/img/me.svg"
        alt="Enrico Mattia Salonia in Australia with a Kangaroo"
        width={imgWidth}
        caption="A kangaroo escaping from me talking about game theory"
      />
      <p>
        I am a behavioral economist interested in theory and <br/> experiments.
        <br/><br/>
        I am a fourth-year PhD student in Economics <br/> at <Link href="https://www.tse-fr.eu/" text="Toulouse School of Economics"/>.
        <br/><br/>
        I was also a 2023 Fellow at the <br/><Link href="https://globalprioritiesinstitute.org/" text="Global Priorities Institute"/>.
        <br/><br/>
        My CV is <Link href="" text="here"/>.
        <br/><br/>
        Feel free to contact me at <br/>
        <Link href="mailto:mattia.salonia@tse.fr" text="mattia.salonia@tse.fr"/> or <br/>
        <Link href="mailto:mattia.salonia1@gmail.com" text="mattia.salonia1@gmail.com"/>
      </p>
    </main>
  );
}
