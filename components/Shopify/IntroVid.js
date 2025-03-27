import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

const IntroVid = () => (
  <Section nopadding id="video" style={{alignItems: 'center'}}>
    <SectionTitle main>Introduction Video</SectionTitle>
    <iframe
        loading="lazy"
        src="https://www.youtube.com/embed/OAtx2N7zHGU"
        height='700px'
        width='100%'
        frameBorder={0}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Introduction"
        />{" "}      
  </Section>
);

export default IntroVid;