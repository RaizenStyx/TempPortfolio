import React from 'react';
import { Section, SectionText2 } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import { ResumeTitle } from '../Resume/ResumeStyles';


export default function XAppHero() {

  return (

    <Section row nopadding>
      <LeftSection>
        <ResumeTitle>
            C# Moblie Apps 
        </ResumeTitle>
        <SectionText2>
        Also, here are some images of a Weather App I have made in college using XAML and C#. Built with a SQLlite database that stored locations, and used a weather API to retrieve data based on the location.
        </SectionText2>

      </LeftSection>

    </Section>

);
}