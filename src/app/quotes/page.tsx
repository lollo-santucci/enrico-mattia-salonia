import QuoteSection from "@/components/organisms/QuoteSection/QuoteSection";
import TextSimple from "@/components/atoms/TextSimple/TextSimple";
import PageSection from "@/components/atoms/PageSection/PageSection";

export default function Quotes() {
    return (
      <main className="main col">
        <PageSection>
          <TextSimple content="I sometimes find nice quotes on random topics from books, songs or other media. I collect these here, in no particular order, with or without commentary. Reach out if you want to discuss any of them!" />
          <QuoteSection 
          quote="If the model under consideration is a formal model, that is, if it does not pretend to model reality adequately, then the model assumptions are in a sense arbitrary, that is, the model builder can freely decide which model characteristics he chooses. If, however, the model or theory asserts factuality, that is, if conclusions drawn from these models have a bearing on reality and are supposed to model reality adequately, then the modeling language has to be suited to model the characteristics of the situation under study appropriately."
          source="Zimmermann, H. J. (2011). Fuzzy set theory—and its applications. Springer Science & Business Media. (p. 2)"
          comment="The entire introduction of this book is worth reading even if you are not interested in the topic. It is a brilliant discussion of the relationship between natural language and mathematics. I think this passage suggests a distinction between two aims of modeling: obtaining a “logical” result or describing an empirical counterpart. (Is the first even “modeling”?)"
          />
          <QuoteSection 
          quote="Funny rationality, what would positions in power be? Led by feelings that seemingly change hourly."
          source="Paris Paloma (2023). Drywall."
          comment="Nice quote for a paper arguing that dynamic consistency is necessary for rationality (I doubt it is)."
          />
          <QuoteSection 
          quote="Allegiance to rigor dictates the axiomatic form of the analysis where the theory, in the strict sense, is logically entirely disconnected from its interpretations. In order to bring out fully this disconnectedness, all the definitions, all the hypotheses, and the main results of the theory, in the strict sense, are distinguished by italics; moreover, the transition from the informal discussion of interpretations to the formal construction of the theory is often marked by one of the expressions: “in the language of the theory,” “for the sake of the theory,” “formally.” Such a dichotomy reveals all the assumptions and the logical structure of the analysis. It also makes possible immediate extensions of that analysis without modification of the theory, by simple reinterpretations of concepts."
          source="Debreu, G. (1959). Theory of value: An axiomatic analysis of economic equilibrium (Vol. 17). Yale University Press. (p. x)"
          comment="I wish it were common to explicitly distinguish the logical results of a paper from their interpretation. I feel that by collapsing these two we step into a strange ontological paradox in which the empirical counterpart is the artificial construct of the theory. Maybe this would only lengthen papers (e.g., “in the language of the theory” if marginal costs increase then…)."
          />
          <QuoteSection 
          quote="It is our choices, Harry, that show what we truly are, far more than our abilities."
          source="Rowling, J. K. (2016). Harry Potter and the Chamber of Secrets (Vol. 2). Bloomsbury publishing. (p. )"
          comment="Albus Dumbledore adheres to revealed preference theory."
          />
          <QuoteSection 
          quote="For instance, there is no need to argue whether economics (or decision theory, or sociology) is a science. We may define “science” in a way that includes economics or in a way that doesn’t, depending on which generalizations will be easier to state using the definition."
          source="Gilboa, I. (2009). Theory of decision under uncertainty (Vol. 45). Cambridge university press. (p. 58)"
          comment="I asked myself and discussed with others about this point multiple times. But in the end, I stopped caring. I think sometimes the word “this is science” is used in a loaded way, meaning something like “oh but this is truly correct, not an opinion.” Is it about the accuracy of predictions? Then just set the bar you like for accepting a discipline as a science. Is it about math? Economists use math, and their results are no different than those in mathematics or other “sciences.”"
          />
        </PageSection>
      </main>
    );
  }