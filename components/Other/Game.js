import { Section, SectionText2, SectionTitle } from '../../styles/GlobalComponents';
import React from 'react';
import { ExternalLinks, BlogCard, CardInfo, GridContainer, HeaderThree, Hr, TitleContent, UtilityList, Img } from '../../components/Projects/ProjectsStyles';
import { games, unrealGames } from '../../constants/constants';


const Game = () => {
  return (
    <>
    <Section nopadding id = "game" style={{alignItems: 'center'}}>

      <SectionTitle main>Unreal Engine Games</SectionTitle>
      <SectionText2>
        These are two complete games I have made using Unreal Engine 5. Using Unreal Engine was a great experience to introduce myself to the Video Game development field, and I am excited to see what comes next in this part of my learning career.   
      </SectionText2>
      </Section>
          <GridContainer>
        {unrealGames.map((p, i) => {
          return (
            <BlogCard key={i}>
            <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
            
              <UtilityList>
              
              <ExternalLinks href = {p.source} target='_blank'>Code</ExternalLinks> 
              
              </UtilityList>
            </BlogCard>
          );
        })}
          </GridContainer>

        <Section nopadding id = "older" style={{alignItems: 'center'}}>
        <SectionTitle main>Canvas/Browser Games</SectionTitle>
          <SectionText2>
            These are the games I have made that are avilable to play on Desktop. The first five are examples from Chris DeLeon's courses. with the last one being done completely by me. I listened and followed along, while adding my changes as I progressed. Making these changes along the way, and then going back and making other changes to ensure I fully understood the program was an exciting experience. 
          </SectionText2>
          </Section>
              <GridContainer>
            {games.map((p, i) => {
              return (
                <BlogCard key={i}>
                <Img src={p.image} />
                  <TitleContent>
                    <HeaderThree title>{p.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                
                  <UtilityList>
                  
                  <ExternalLinks href = {p.source} target='_blank'>Play</ExternalLinks> 
                  
                  </UtilityList>
                </BlogCard>
              );
            })}
              </GridContainer>
      
      </>
      );
}

export default Game;