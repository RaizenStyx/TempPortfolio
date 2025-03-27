import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import { SecondaryBtn } from '../../styles/GlobalComponents';
import { NavLink } from '../Header/HeaderStyles';
import { NewLink } from '../Projects/ProjectsStyles';


export default function HomeHero() {
const handleClick = () => {
    window.open("https://www.upwork.com/freelancers/~011890ee4ee1c9e2f6", "_blank");
}  

  return (

    <Section row nopadding id="hire">
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi, I'm Connor Reed - a freelance Shopify developer with a background in web development. I help businesses improve their Shopify stores through custom coding, design updates,
          and performance enhancements. I'm currently working full-time but available for freelance projects. 
          <NewLink href='#guarantees'> Contact me directly</NewLink> or on Upwork for a free quote and let's talk about how to elevate your store. 
        </SectionText>
        <SecondaryBtn onClick={handleClick}>Upwork Profile</SecondaryBtn>
         
      </LeftSection>
    </Section>
  
);
}