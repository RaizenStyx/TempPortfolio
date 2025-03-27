import React, { useState } from 'react';
import { Section, SectionText, SectionTitle, SecondaryBtn } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import { Div, AboutDiv, AboutDiv2 } from '../Header/HeaderStyles';
import { SocialIconsNew } from '../Header/HeaderStyles';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { NewLink } from '../Projects/ProjectsStyles';
import ContactForm from '../ContactForm/ContactForm';

export default function AboutMeHero() {
  const [isShown, setIsShown] = useState(false);
  const toggle = () => {
    setIsShown(prevState => !prevState)
  }

  return (

    <Section row nopadding id="contact">
      <LeftSection>
        <SectionTitle main center>
          Some interesting <br/>
          Information about me
        </SectionTitle>
        <SectionText>
        Inspiring Software Developer with a passion for creating the the best video games. 
        Programming AAS degree graudate and currently pursuing a Bachelor's degree in Video Game Development at Southern New Hampshire University. 
        Shopify/Web Development and communication are also my areas of expertise. 
        </SectionText>
        <SecondaryBtn onClick={toggle}>Contact Me</SecondaryBtn>

        {isShown && <>
        <ContactForm />
        <SectionText style={{justifySelf: 'center'}}>Or reach out to me directly</SectionText>
        <AboutDiv>
         
        <Div>
        <NewLink href='mailto:me@calexreed.dev'>
        <SectionText>By Email: me@calexreed.dev</SectionText>
        </NewLink>
        </Div>
        <SectionText>Or</SectionText> 
        <Div>
        <NewLink href='tel:423-367-5437'>
         <SectionText>By Telephone: +1(423)-367-5437</SectionText>
        </NewLink>
        </Div>
        </AboutDiv>

        <AboutDiv2 style={{alignItems: 'flex-start', justifyContent: 'space-around'}}>
        <Div>
            <SocialIconsNew href='mailto:me@calexreed.dev'>
                <HiOutlineMail size="5rem" />
            </SocialIconsNew>
        </Div>

        <SectionText style={{opacity: '0'}}>Or</SectionText>

        <Div>
            <SocialIconsNew href='tel:423-367-5437'>
                <HiOutlinePhone size="5rem" />
            </SocialIconsNew>
        </Div>
        
        </AboutDiv2>
        </>}

        
   
      </LeftSection>
    </Section>
  
);
}