import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import ShopHeader from '../components/Header/ShopHeader';
import Hero from '../components/Hero/Hero';
import ShopProjects from '../components/Shopify/ShopProjects';
import Skills from '../components/Shopify/Skills';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import IntroVid from '../components/Shopify/IntroVid';
import CallToAction from '../components/Shopify/CallToAction';
import Head from 'next/head';
import { NasaImageContainer } from '../components/NASA/ImageStyles';
import { SecondaryBtn } from '../styles/GlobalComponents';
import { useState } from 'react';
import SupportMe from '../components/Support/SupportMe';
import { ResumeDivider } from '../components/Resume/ResumeStyles';


const Home = () => {
  const [isShown, setIsShown] = useState(false);
  const [btnText, setBtnText] = useState("Support Me");
  const toggle = () => {
    setIsShown(!isShown)
    if(btnText === "Support Me"){
      setBtnText("Thank You!")
    } else {
      setBtnText("Support Me")
    }
  }

  // Implement a store/support system? On bottom
  
  return (
    <>
    <Head>
      <title>Shopify</title>
    </Head>
   
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>

      <ResumeDivider />

      <ShopHeader />
      
      <IntroVid />
      <Skills />
      <ShopProjects />
      <CallToAction />
      
    </Layout>

    <NasaImageContainer id="support">
      <SecondaryBtn
        onMouseEnter={() => !isShown ? setBtnText("Coming Soon!") : setBtnText("Thank You!")}
        onMouseLeave={() => setBtnText("Support Me")}
        onClick={toggle} 
        >{btnText}
      </SecondaryBtn>
      </NasaImageContainer>
      {!isShown && <div style={{marginBottom: '10rem'}}></div>}
      {isShown && 
        <div style={{marginBottom: '50rem', marginLeft: 'auto'}}>
          <SupportMe />
        </div>}
    </>
  );
};

export default Home;