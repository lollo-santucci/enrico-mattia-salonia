import QuoteSection from "@/components/organisms/QuoteSection/QuoteSection";
import TextSimple from "@/components/atoms/TextSimple/TextSimple";
import PageSection from "@/components/atoms/PageSection/PageSection";

export default function Quotes() {
    return (
      <main className="main col">
        <PageSection>
          <TextSimple content="I sometimes find nice quotes on random topics from books, songs or other media. I collect these here, in no particular order, with or without commentary. Reach out if you want to discuss any of them!" />
          <QuoteSection 
          quote="It is our choices, Harry, that show what we truly are, far more than our abilities."
          source="Rowling, J. K. (2016). Harry Potter and the Chamber of Secrets (Vol. 2). Bloomsbury publishing. (p. )"
          comment="Albus Dumbledore adheres to revealed preference theory."
          />
          <QuoteSection 
          quote="It is our choices, Harry, that show what we truly are, far more than our abilities."
          source="Rowling, J. K. (2016). Harry Potter and the Chamber of Secrets (Vol. 2). Bloomsbury publishing. (p. )"
          comment="Albus Dumbledore adheres to revealed preference theory."
          />
        </PageSection>
      </main>
    );
  }