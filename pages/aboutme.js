import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import AboutMeHead from '../components/Header/AboutMeHead';
import AboutMeHero from '../components/Hero/AboutMeHero';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head';
import { ResumeDivider } from '../components/Resume/ResumeStyles';



const AboutMe = () => {
  return (
    <>
    <Head>
      <title>About Me</title>
    </Head>
    <Layout>
      <Section grid>
        <AboutMeHero />
        <BgAnimation />
      </Section>

      <ResumeDivider />  
  
      <AboutMeHead />

      <Timeline />
      <Acomplishments />
      <Technologies />

      </Layout>
<div id = "space"></div>
    
    </>
  );
};

export default AboutMe;