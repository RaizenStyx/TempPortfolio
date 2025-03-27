import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import AboutMeHead from '../components/Header/AboutMeHead';
import AboutMeHero from '../components/Hero/AboutMeHero';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { SecondaryBtn, Section, SectionTitle } from '../styles/GlobalComponents';
import Head from 'next/head';
import { useState } from 'react';
import ImagePreview from '../components/NASA/ImagePreview';
import { Fade, SearchInput, ImageGridContainer, NasaButton, NasaImageContainer } from '../components/NASA/ImageStyles';
import { ResumeDivider } from '../components/Resume/ResumeStyles';
import Link from 'next/link';

// Removed items prop for now

const AboutMe = () => {
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState(items);
  const [isShown, setIsShown] = useState(false);
  const [btnText, setBtnText] = useState("Do you like Space?")
  const toggle = () => {
    setIsShown(!isShown)
  }
//uqns992xmwPX45R5s4MJ2GpnltDEcZgH8Iowbnva NASA API KEY

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
      {/* <NasaImageContainer id="space">
      <SecondaryBtn 
        onClick={toggle}
        onMouseEnter={() => !isShown ? setBtnText("Yes!") : setBtnText('No ')}
        onMouseLeave={() => setBtnText("Do you like Space?")}
        >{btnText}
      </SecondaryBtn>
      </NasaImageContainer>
      
      {isShown && <NasaImageContainer>
      <SectionTitle style={{textAlign: 'center'}}>Below are some of my favorite Space Images!<br/>But you can search for your own from Nasa's Images!</SectionTitle>
      </NasaImageContainer>}

      
      {isShown && <Fade style={{marginTop: '5rem'}}>
        <ImageGridContainer>
          {photos && photos.slice(0, 3).map((preview) => (
            <ImagePreview 
              key={preview.data[0].nasa_id}
              thumbnailURL={preview.links[0].href}
              nasaId={preview.data[0].nasa_id}
            />
          ))}
          {photos && photos.slice(3).map((preview) => (
            <ImagePreview 
              key={preview.data[0].nasa_id}
              thumbnailURL={preview.links[0].href}
              nasaId={preview.data[0].nasa_id}
            />
          ))}
        </ImageGridContainer>

        </Fade>}

      {isShown && <SearchInput id='nasaSearch' 
        onChange={(e) => setSearch(e.target.value)} 
        type='text'
        placeholder='Search Nasa Images'
      /> }
      {isShown && <NasaButton
      style={{width: '50%'}} 
        disabled={search == ''} 
        onClick={
          async () => {
            const results= await fetch(
              `https://images-api.nasa.gov/search?media_type=image&q=${search}`
            );
            const preview = await results.json();
            setPhotos(await preview.collection.items)
            }
      }>
        Find
      </NasaButton>} */}
    </>
  );
};

export default AboutMe;


// export async function getStaticProps() {
//   const results = await fetch("https://images-api.nasa.gov/search?media_type=image&keywords=SMACS-0723-73,HCG-92,NGC-3132,Triangulum-Galaxy");
//   const preview = await results.json();
//   const items = await preview.collection.items;
//   return {
//     props: { items },
//   }
// }