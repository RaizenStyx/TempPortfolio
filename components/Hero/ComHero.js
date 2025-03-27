import React from 'react';
import { Section, SectionText2 } from '../../styles/GlobalComponents';
import { ResumeDivider } from '../Resume/ResumeStyles';
import { SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

export default function ComHero() {

  return (

    <Section nopadding style={{alignItems: 'center'}} >
        <SectionTitle main>
            Programs using OOP
        </SectionTitle>
        <SectionText2>
        Here are 2 links that will let you see these programs in action. The Java Random Monster Generator is a  console-based program that utilizes classes to create, manage, and sort randomly generated monsters. The C++ Farkle dice game is a class-driven console implementation of the dice game Farkle, featuring structured game logic and file handling.
        </SectionText2>
    </Section>

);
}