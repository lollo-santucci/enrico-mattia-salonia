import PageSection from "@/components/atoms/PageSection/PageSection";
import CardExtended from "@/components/organisms/CardExtended/CardExtended";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import TextSimple from "@/components/atoms/TextSimple/TextSimple";
import WarningPanel from "@/components/molecules/WarningPanel/WarningPanel";
import Class from "@/components/molecules/Class/Class";

export default function Teaching() {
    return (
      <main className="main col">
        <PageSection>
          <SectionTitle text="Macroeconomics" />
          <TextSimple content="I have taught the following courses at the University of Sydney:" />
          <WarningPanel
            title="Introduction to Macroeconomics"
            content="This course introduces students to the basic concepts and tools of macroeconomics. It covers the determination of national income, employment, and the price level, and the role of monetary and fiscal policy in influencing these variables."
            linktext="Plan Fall 2023"
            link="/"
          />
          <CardExtended title="Lectures">
            <Class title="Lecture 1" />
            <Class title="Lecture 2" />
            <Class title="Lecture 3" />
          </CardExtended>
        </PageSection>
      </main>
    );
  }