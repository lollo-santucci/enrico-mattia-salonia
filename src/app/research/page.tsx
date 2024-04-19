import PageSection from "@/components/atoms/PageSection/PageSection";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import CardExtended from "@/components/organisms/CardExtended/CardExtended";

export default function Research() {
  return (
    <main className="main col">
      <PageSection>
        <SectionTitle text="Work in progress"/>
        <CardExtended title="A title" abstract="An abstract"/>
        <SectionTitle text="Work in progress"/>
        <CardExtended title="A title" abstract="An abstract"/>
        <CardExtended title="A title" abstract="An abstract"/>
        <SectionTitle text="Work in progress"/>
        <CardExtended title="A title" abstract="An abstract"/>
        <CardExtended title="A title" abstract="An abstract"/>
        <SectionTitle text="Work in progress"/>
        <CardExtended title="A title" abstract="An abstract"/>
        <CardExtended title="A title" abstract="An abstract"/>
      </PageSection>
    </main>
  );
}
