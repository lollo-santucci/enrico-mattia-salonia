import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/organisms/Header/Header";
import Footer from "../components/organisms/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enrico Mattia Salonia",
  description: "Enrico Mattia Salonia's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/jackie.png"/>
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
