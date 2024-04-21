import PageSection from "@/components/atoms/PageSection/PageSection";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import CardExtended from "@/components/organisms/CardExtended/CardExtended";
import Abstract from "@/components/atoms/Abstract/Abstract";

export default function Research() {
  return (
    <main className="main col">
      <PageSection>
        <SectionTitle text="Work in progress"/>
        <CardExtended title="A title">
          <Abstract content="An abstract"/>
        </CardExtended>
      </PageSection>
    </main>
  );
}
