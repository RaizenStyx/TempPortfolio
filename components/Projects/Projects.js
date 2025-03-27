import React from 'react';
import Link from 'next/dist/client/link';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionTitle, SectionText2 } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <>
      
      <Section nopadding id = "projects" style={{alignItems: 'center'}}>
          <SectionTitle main>Different Types of Projects</SectionTitle>
          <SectionText2>
          Explore my diverse range of projects, from React applications and object-oriented programs to video games and college work. Each section highlights different aspects of my development skills, spanning web, software, and game development.
          </SectionText2>
        </Section>
  
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title = "true">{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit} target="_blank">Code</ExternalLinks>
              <ExternalLinks href={p.source} passHref>
                Source
              </ExternalLinks>
              
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    </>
 
);

export default Projects;