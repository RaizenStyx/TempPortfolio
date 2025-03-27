import React, { useState } from 'react';
import { Section, SectionText, SectionTitle, SecondaryBtn } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import Modal from '../Modal/Modal';
import Resume from '../Resume/Resume';
import { AiFillGithub } from 'react-icons/ai';
import { Div, SocialIconsNew } from '../Header/HeaderStyles';

export default function OtherHero() {

  const [showModal, setShowModal] = useState(false);

  const manageState =() => {
    setShowModal(!showModal)
  }

  return (
    <Section row nopadding id="resume">
      <LeftSection>
        <SectionTitle main center>
            Hello World! <br/> I call it Project Program
        </SectionTitle>
        <SectionText>
        These are the best of my completed projects. Building this portfolio with React and Next.js has been one of my biggest personal projects. I specialize in Shopify Development through both freelancing and my current role. If you're interested, feel free to check out my resume below.
        </SectionText>
        
        <Div>
        <SecondaryBtn onClick={() => manageState()} >Resume
        <Modal onClose={() => manageState()}
              show = {showModal}>
          <Resume />
          </Modal>
        </SecondaryBtn>
        
        <SocialIconsNew href='https://github.com/RaizenStyx' target='_blank'>
          <AiFillGithub size="5rem" />
        </SocialIconsNew>
        </Div>
      </LeftSection>

    </Section>

);
}