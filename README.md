# Enrico Mattia Salonia - Personal Website
Benvenuto nella repository github del sito personale di [Enrico Mattia Salonia](www.enricomattiasalonia.com)!

## Come modificare il codice
Per modificare il contenuto dell'applicazione bisogna avere una minima comprensione dell'alberatura dei file del progetto e come si combinano i componenti all'interno delle diverse pagine. Per questo motivo, in queste istruzioni, vedremo per ogni pagina quali componenti vengono importati e come utilizzarli.

Per cominciare, le pagine dell'applicazione si trovano nella cartella `src/app`, che presenta la seguente struttura:
```
app
|___quotes/page.tsx
|___research/page.tsx
|___teaching/page.tsx
|_layout.tsx
|_page.tsx
```
La struttura di ogni pagina è gestita nel file _layout.tsx_, che le fa da scheletro. Il contenuto specifico della rotta(pagina), invece, viene costruito nei singoli file _page.tsx_. Le cartelle danno il nome alle rotte dell'applicazione e al loro interno si trova il file _page.tsx_ di riferimento. Il contenuto della homepage si trova allo stesso livello del file di layout.

N.B.: Nella pratica, una rotta è una cartella all'interno di `src/app/`. Ad esempio la rotta _teaching_ consiste nella cartella `src/app/teaching` ed il suo contenuto è gestito in `src/app/teaching/page.tsx`.

I componenti che popolano il contenuto delle rotte si trovano nella cartella `src/components` e vengono importati nelle diverse pagine a seconda della necessità.

### Layout
```
src/app/layout.tsx
```
```
//Import
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
```

Il layout delle pagine gestisce: 
- I metadati dell'applicazione, ovvero tutto ciò che va nel tag `<head/>` HTML.
- le famiglie di font usate nell'applicazione
- i componenti `<Header/>` e `<Footer/>`

#### Header
```
src/components/organisms/Header/Header.tsx
```
L'header raggruppa i componenti `<Logo/>` e `<Nav/>`, incaricandosi della navigazione tra le rotte all'interno dell'applicazione. La modifica o aggiunta di una rotta deve essere fatta nel file `src/components/molecules/Nav/Nav.tsx`, attraverso il componente `<NavItem/>`

###### Esempio
```
<NavItem text="Research" href="/research" active={pathname === "/research"} />
```
l'attributo text gestisce il testo visualizzato, href indirizza verso la corretta cartella in `src/app` e active ne definisce lo stile.

#### Footer
```
src/components/organisms/Footer/Footer.tsx
```
Il footer non contiene logiche ed è composto esclusivamente da codice HTML.

### Homepage
```
src/app/page.tsx
```
```
import Img from "@/components/molecules/Img/Img";
import Link from "@/components/atoms/Link/Link";
import useWindowDimensions from "@/hooks/useWindowDimensions";
```

L'homepage è composta dal componente `<Img/>` e un paragrafo di testo in HTML. Gli attributi del componente sono il percorso all'immagine (src), una descrizione dell'immagine (per la SEO), la sua larghezza in px (che viene comunque gestito dinamicamente) e la didascalia. 
Nel paragrafo, l'unico componente utilizzato è il `<Link/>`, a cui va dato il testo da visualizzare, il link a cui collegarsi e la dimensione del testo (text-xs, text-s, text-m, text-l, text-xl).

### Reaserch
```
src/app/research/page.tsx
```
```
import PageSection from "@/components/atoms/PageSection/PageSection";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import CardExtended from "@/components/organisms/CardExtended/CardExtended";
import Abstract from "@/components/atoms/Abstract/Abstract";
import TextSimple from "@/components/atoms/TextSimple/TextSimple";
import Link from "@/components/atoms/Link/Link";
```
La pagina si sviluppa in sezioni che possono contenere un titolo, testi, e card degli articoli. 

```
// Esempio di sezione
<PageSection>
    <SectionTitle text="For Fun"/>
    <TextSimple content="I have some work in areas in the neighborhood of economics, but not quite there. You can find it here."/>
    <CardExtended title="The Chaining Argument Unchained" authors="Annalisa Costella" links="https://www.annalisacostella.com/home">
        <Abstract content="We show that formalising Chang's chaining argument against the Trichotomy Thesis demonstrates that the intuitive pull of the argument relies on exploiting the features of a notion of closeness that is, however, a trichotomous relation itself. As such, the premises of the argument are inconsistent with each other, and the argument is unsound. Our results illuminate that the chaining argument does not provide insights into axiology."/>
    </CardExtended>
</PageSection>
```

L'utilizzo dei componenti è molto intuitivo, l'unica cosa da tenere a mente è la logica di inserimento dei coautori. Il componente `<CardExtended />` ha come argomenti facoltativi `authors` e `links`. Per poter inserire più autori e link questi devono essere inseriti in un unico blocco di testo e separati da una virgola. L'associazione tra i due avverrà secondo l'ordine di inserimento.

###### Esempio
```
<CardExtended title="Your Opinion: Either Irrelevant or False" authors="Annalisa Costella, Valerio De Brover" links="https://www.annatheduck.com,https://www.broverino.bro"/>
```

### Teaching
```
src/app/teaching/page.tsx
```
```
import PageSection from "@/components/atoms/PageSection/PageSection";
import CardExtended from "@/components/organisms/CardExtended/CardExtended";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import TextSimple from "@/components/atoms/TextSimple/TextSimple";
import WarningPanel from "@/components/molecules/WarningPanel/WarningPanel";
import Class from "@/components/molecules/Class/Class";
import Link from "@/components/atoms/Link/Link";
```
Anche la pagina dell'insegnamento si sviluppa in sezioni. Ognuna di queste sezioni rappresenta un corso tenuto. Il corso contiene il titolo, un eventuale paragrafo introduttivo, un pannello con annunci ed eventuali link a materiali collegati, una card con le lezioni, e una card con materiale extra.  

```
// Esempio di sezione
<PageSection>
    <SectionTitle text="Topics in Macro I" />
    <TextSimple content="Welcome to the class website! Here I will post the material I produce for the course, namely solutions to exercises and maybe some extras that could be useful. Contact me if you have any questions!" />
    <WarningPanel
        title="Attention!"
        content="There could be mistakes, use the official solutions as a reference! Feel free to point out any typos, mistakes, or answers that are not clear. If you want you can check the plan (NEW 15/11/2023!) for the lectures. Solutions will come out lecture by lecture. If you obtained solutions from other sources, don’t consult them! You will do way better on the exam if you attempt to do the exercises yourself before the lecture."
        linktext="Check the plan!"
        link="/teaching/Plan_20232024.html"
    />
    <CardExtended title="Lectures">
        <Class
        title="TD1"
        linkToDoc="/teaching/TD1.html"
        linkToPdf="https://drive.google.com/file/d/1QLD9sNkWYlZ_4cOVKcgUfBUNnKC1qVNu/view"
        />
    </CardExtended>
    <CardExtended title="Extras">
        <TextSimple content="If you click on the link below, you will find a code that solves and plots the Solow-Swan model! I tried to make it as straightforward as possible by including instructions. Just click on the link and see if you can play around with the code. Good luck!" />
        <Link
        href="https://mybinder.org/v2/gh/Enricomattia/TopicsInMacro1TD/HEAD?filepath=solow-swan.ipynb"
        text="Jupyter Notebook - Solow-Swan Model"
        size="text-m"
        />
        <TextSimple content="Here you can find the solutions to the 2020 and 2019 midterms. However, I strongly suggest you focus on the class and TD material before attempting it!" />
        <Class 
        title="Midterm 2020" 
        linkToPdf="https://drive.google.com/file/d/1VppGSs9ZSFqEMvSc339n2Ogz0L8Dc9bz/view" />
    </CardExtended>
</PageSection>
```

In questa pagina vengono usati due nuovi componenti: il `<WarningPanel/>` e la `<Class/>`. Il `<WarningPanel/>` ha come argomenti: 
- title, il titolo del pannello
- content, il contenuto
- linktext(facoltativo), testo renderizzato dell'eventuale link e
- link(facoltativo), il link al contenuto.

La classe invece gestisce le risorse legate alle lezioni inserite nel sito. Gli argomenti della classe sono:
- title, il nome della lezione
- linkToPdf(facoltativo), il riferimento ipertestuale legato all'icona pdf (<img src="/public/icons/FilePdf.svg">)
- linkToDoc(facoltativo), link alla pagina HTML della lezione legato all'icona della lente di ingrandimento (<img src="/public/icons/MagnifyingGlass.svg">).

L'icona sarà visibile solo in caso di inserimento del link.

### Quotes
```
src/app/quotes/page.tsx
```
```
import QuoteSection from "@/components/organisms/QuoteSection/QuoteSection";
import TextSimple from "@/components/atoms/TextSimple/TextSimple";
import PageSection from "@/components/atoms/PageSection/PageSection";
```
La pagina delle citazioni è la più semplice da gestire. Ogni citazione è contenuta nel componente `<QuoteSection/>`, che ha come argomenti:
- quote, la citazione
- source, la fonte della citazione
- comment(facoltativo), il commento alla citazione.

## Le Risorse
Le risorse interne all'applicazione sono contenute nella cartella `public`. Quando mostrate tramite browser, il link alla risorsa apparirà come `www.sito.com/cartella/contenuto`. Ad esempio, il pdf della prima lezione, con percorso `/public/teaching/TD1.html`, apparirà al link `www.enricomattiasalonia.com/teaching/TD1.html`. All'interno del componente andrà inserito il percorso della risorsa.

