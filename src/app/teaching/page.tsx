import PageSection from "@/components/atoms/PageSection/PageSection";
import CardExtended from "@/components/organisms/CardExtended/CardExtended";
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import TextSimple from "@/components/atoms/TextSimple/TextSimple";
import WarningPanel from "@/components/molecules/WarningPanel/WarningPanel";
import Class from "@/components/molecules/Class/Class";
import Link from "@/components/atoms/Link/Link";

export default function Teaching() {
  return (
    <main className="main col">
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
          <Class
            title="TD2"
            linkToDoc="/teaching/TD2.html"
            linkToPdf="https://drive.google.com/file/d/1NbH1gSlIQbrla6fgK4gZFgQ-KWvkyPkM/view"
          />
          <Class
            title="TD3"
            linkToDoc="/teaching/TD3.html"
            linkToPdf="https://drive.google.com/file/d/19DfRzbY7gLqQ86UuwygGf5pFoqtU22ta/view"
          />
          <Class
            title="TD4"
            linkToDoc="/teaching/TD4.html"
            linkToPdf="https://drive.google.com/file/d/19bfcxd4-VgBrLCkcOHTZgpXwYQ1rsOuq/view?usp=sharing"
          />
          <Class
            title="TD5"
            linkToDoc="/teaching/TD5.html"
            linkToPdf="https://drive.google.com/file/d/1f-C6Qw-6zvCzkF5J-AuICqOngknbLv-t/view?usp=sharing"
          />
          <Class
            title="TD6"
            linkToDoc="/teaching/TD6.html"
            linkToPdf="https://drive.google.com/file/d/1aSapf1hQ8jAMNdxUj2YGtVAOH2v75qVp/view?usp=sharing"
          />
          <Class
            title="TD7"
            linkToDoc="/teaching/TD7.html"
            linkToPdf="https://drive.google.com/file/d/1wd0I0VdWbiYpgOMlZwbnzUi1RUWl_jqh/view?usp=sharing"
          />
          <Class
            title="TD8"
            linkToDoc="/teaching/TD8.html"
            linkToPdf="https://drive.google.com/file/d/1ePqEfj63zhQ-oS-WEcD5lCPw_ZTGvfWh/view?usp=drive_link"
          />
          <Class
            title="TD9"
            linkToDoc="/teaching/TD9.html"
            linkToPdf="https://drive.google.com/file/d/1xAyKQgJHwSKFePWyJtyCEfkeXByjrmBo/view?usp=sharing"
          />
          <Class
            title="A Solarian Maltus Model"
            linkToDoc="/teaching/SolariaSOL.html"
            linkToPdf="https://drive.google.com/file/d/1I2DMulWABztOxHOKLuas-n96Ov5NTngb/view?usp=share_link"
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
          <Class 
            title="Baby Boom" 
            linkToPdf="https://drive.google.com/file/d/1rHf8e_8WRqNfS-1QuBd-d1_GCsmbRszR/view" />
        </CardExtended>
      </PageSection>
    </main>
  );
}
