import { Section } from "../../styles/GlobalComponents";
import { ExternalLinks, GridContainer } from "../Projects/ProjectsStyles";
import ComHero from "../Hero/ComHero";
import { SectionDivider } from "../../styles/GlobalComponents";

const Complier = () => {

  return (
    
    <Section id = "compiler" >
      
      
      <ComHero />

      <GridContainer>
      <ExternalLinks href= "https://www.jdoodle.com/a/3B6G" target="_blank">
      Java Monster Generator
      </ExternalLinks>

      <ExternalLinks href= "https://onlinegdb.com/TeCj9JC45" target="_blank">
      C++ Farkle Dice Game
      </ExternalLinks>
      
      </GridContainer>
    </Section>

  );
};


export default Complier;