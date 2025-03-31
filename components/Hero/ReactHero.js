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
      I started using React while building this portfolio. Once the first iteration was complete, I went back to learn the fundamentals properly. Along the way, I developed several React applications to strengthen my skills. Three of these projects are hosted on Vercel for live previews, while the fourth, a MERN app, was built successfully but is no longer hosted due to low database traffic. After completing these apps, I returned to refining my portfolio to further improve its design and functionality.
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