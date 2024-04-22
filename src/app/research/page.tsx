import PageSection from "@/components/atoms/PageSection/PageSection";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import CardExtended from "@/components/organisms/CardExtended/CardExtended";
import Abstract from "@/components/atoms/Abstract/Abstract";
import TextSimple from "@/components/atoms/TextSimple/TextSimple";
import Link from "@/components/atoms/Link/Link";

export default function Research() {
  return (
    <main className="main col">
      <PageSection>
        <CardExtended title="A Foundation for Universalisation in Games">
          <Abstract 
            content="In revealed preference theory, observed choice is interpreted as revealing tastes over the outcomes of the decision. Nevertheless, if a moral principle prescribes an act for reasons unrelated to its consequences, the inference drawn regarding preferences is misleading. In this paper, I study the behaviour of deontological decision makers who follow the moral principle of universalisation. I develop a decision theory for agents who value the impact of their choice in determining a counterfactual outcome they envision. Hence, the choice of action reveals a preference for counterfactual outcomes. I propose a unifying model based on my theory, inspired by the equal sacrifice principle. It can be specified to obtain the most prominent models of universalisation, compare them, highlight and arguably overcome their limitations."
            availability="Draft"
            link="/"
          />
        </CardExtended>
      </PageSection>
      <PageSection>
        <SectionTitle text="Work in progress"/>
        <CardExtended title="Belief-dependent motivations and belief updating">
          <Abstract content="This paper develops a theory of subjective motivated belief updating. Behavior in a dynamic decision problem reveals that the agent anticipates she will distort her beliefs to satisfy her belief-dependent preferences. Assumptions on ex-ante choice are provided to identify preferences, prior beliefs and departures from Bayesian updating. The theory rationalises excessive trading, the ostrich effect and moral wiggle room."/>
        </CardExtended>
        <CardExtended title="Can Pessimistic Beliefs Threaten Redistribution?" authors="Michele Bisceglia" links="https://www.tse-fr.eu/fr/people/michele-bisceglia">
          <Abstract content="This paper develops a theory of subjective motivated belief updating. Behavior in a dynamic decision problem reveals that the agent anticipates she will distort her beliefs to satisfy her belief-dependent preferences. Assumptions on ex-ante choice are provided to identify preferences, prior beliefs and departures from Bayesian updating. The theory rationalises excessive trading, the ostrich effect and moral wiggle room."/>
        </CardExtended>
      </PageSection>
      <PageSection>
        <SectionTitle text="For Fun"/>
        <TextSimple content="I have some work in areas in the neighborhood of economics, but not quite there. You can find it here."/>
        <CardExtended title="The Chaining Argument Unchained" authors="Annalisa Costella" links="https://www.annalisacostella.com/home">
          <Abstract content="We show that formalising Chang's chaining argument against the Trichotomy Thesis demonstrates that the intuitive pull of the argument relies on exploiting the features of a notion of closeness that is, however, a trichotomous relation itself. As such, the premises of the argument are inconsistent with each other, and the argument is unsound. Our results illuminate that the chaining argument does not provide insights into axiology."/>
        </CardExtended>
      </PageSection>
      <PageSection>
        <SectionTitle text="Book Review"/>
        <CardExtended title="Review of Ivan Moscati’s Measuring Utility: From the Marginal Revolution to Behavioral Economics" authors="Annalisa Costella" links="https://www.annalisacostella.com/home">
          <Link text="Erasmus Journal for Philosophy and Economics (2020)" href="https://ejpe.org/journal/article/view/469/337" size="text-m" />
        </CardExtended>
      </PageSection>
    </main>
  );
}
