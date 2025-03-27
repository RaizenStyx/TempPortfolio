import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import React, { useState } from 'react';
import OtherHero from '../components/Hero/OtherHero';
import Complier from '../components/Other/Complier';
import Game from '../components/Other/Game';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation2';
import XApp from '../components/Other/XApp';
import { ResumeDivider } from '../components/Resume/ResumeStyles';
import OtherHeader from '../components/Header/OtherHeader';
import Head from 'next/head';
import { NasaImageContainer } from '../components/NASA/ImageStyles';
import { SecondaryBtn } from '../styles/GlobalComponents';
import QuizComp from '../components/Quiz/QuizComp';
import ReactHero from "../components/Hero/ReactHero";
import Projects from '../components/Projects/Projects';

// Maybe find a way to randomize JSON objects for quiz?

export default function Other() {

  const [quizShown, setQuizShown] = useState(false);
  const [btnText, setBtnText] = useState("Portfolio Quiz")
  const toggleQuiz = () => {
    setQuizShown(prevState => !prevState)
  }

  return (
    <>
    <Head>
      <title>Projects</title>
      <meta name="title" content="Home Page" />
      <meta name="description" content="Connor Reed's Portfolio, a Shopify Expert that will help you and your store make money!" />
      <meta property="og:type" content="portfolio" />
      <meta property="og:url" content="https://calexreed.dev" />
      <meta property="og:image" content="/images/me.png" />
    </Head>
    <Layout>
      <Section grid>
        <OtherHero />
        <BgAnimation />
      </Section>

      <ResumeDivider colorAlt />  

      <OtherHeader />

      <Projects />
      
      <ReactHero />

      <ResumeDivider colorAlt />
      
      <Complier />
      <XApp />
      <ResumeDivider />
      <Game />
      <ResumeDivider />
    </Layout>

    <NasaImageContainer id="quiz">
      <SecondaryBtn
      onMouseEnter={() => !quizShown ? setBtnText("Do You Dare?") : setBtnText("Try Again?")}
      onMouseLeave={() => setBtnText("Portfolio Quiz")}
      onClick={toggleQuiz}
        >{btnText}
      </SecondaryBtn>
      </NasaImageContainer>

    {!quizShown && <div style={{marginBottom: '10rem'}}></div>}

    {quizShown && <QuizComp />}    

    </>
  );
};