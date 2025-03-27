import React from 'react';
import { Section, SectionTitle, SectionText2, SectionDivider } from '../../styles/GlobalComponents';
import { ExternalLinks, BlogCard, CardInfo, GridContainer, HeaderThree, Hr, TitleContent, UtilityList, Img } from '../../components/Projects/ProjectsStyles';
import { reactProjects } from '../../constants/constants';


export default function ReactHero() {

  return (
<>
    
    <Section nopadding id="react" style={{alignItems: 'center'}}>
    <SectionDivider />  
      <SectionTitle main>React Projects</SectionTitle>
      <SectionText2>
        Started using React when building this Portfolio. Once the first iteration was done, I went back and taught myself the basics. Here are the apps I have developed in that process. After these apps, I went back to focusing on my Portfolio to polish it up.
        </SectionText2>
      </Section>


      <GridContainer>
            {reactProjects.map((p, i) => {
              return (
                <BlogCard key={i}>
                <Img src={p.image} />
                  <TitleContent>
                    <HeaderThree title>{p.title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo className="card-info">{p.description}</CardInfo>
                 
                  <UtilityList>
                  
                  <ExternalLinks href = {p.source} target='_blank'>Preview</ExternalLinks> 
                  
                  </UtilityList>
                </BlogCard>
              );
            })}
              </GridContainer>
              </>


);
}