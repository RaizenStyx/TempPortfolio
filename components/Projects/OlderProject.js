import { Section, SectionText2, SectionTitle } from '../../styles/GlobalComponents';
import React from 'react';
import { ExternalLinks, BlogCard, CardInfo, GridContainer, HeaderThree, Hr, TitleContent, UtilityList, Img } from '../../components/Projects/ProjectsStyles';
import { olderProjects } from '../../constants/constants';


const OlderProjects = () => {
  return (
    <>
    <Section nopadding id = "older" style={{alignItems: 'center'}}>

      <SectionTitle main>Older Projects</SectionTitle>
      <SectionText2>
        Here are some links to Github lists that contain my previous projects   
      </SectionText2>
      </Section>
          <GridContainer>
        {olderProjects.map((p, i) => {
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
      </>
      );
}

export default OlderProjects;