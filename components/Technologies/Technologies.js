import React from 'react';
import { VscGitMerge } from 'react-icons/vsc';
import { CgCPlusPlus, CgDatabase } from 'react-icons/cg';
import { DiJava } from 'react-icons/di';
import { FaServer } from 'react-icons/fa';
import { GiBroadsword } from 'react-icons/gi';
import { SiNextdotjs, SiPython, SiUnrealengine, SiAdobe, SiAutodesk } from 'react-icons/si';
import { Section, SectionDivider, SectionText2, SectionTitle } from '../../styles/GlobalComponents';
import { ResumeDivider } from '../Resume/ResumeStyles';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { PiFileCSharp } from 'react-icons/pi';

export default function Technologies() {

  return (
    <Section style={{alignItems: 'center'}}>
    <SectionDivider divider />

    <SectionTitle id="tech-1">Full-Stack Technologies</SectionTitle>
    <SectionText2>
    Skilled in developing and maintaining both front-end and back-end systems, with experience in server-side development. Other than Shopify, I specialize in building scalable, responsive applications using modern frameworks and databases.
    </SectionText2>
    <List>

      <ListItem>
        <picture>
          <SiNextdotjs size="5rem" />
        </picture> 
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          Proficient in HTML, CSS, JavaScript, React, Next.js, Vue, and Angular. My portfolio, built with Next.js, is my most comprehensive project to date.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <CgDatabase size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          Experienced with MySQL, Firebase, and MongoDB. I have designed and managed databases that support dynamic, server-driven applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <FaServer size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Server-Side</ListTitle>
          <ListParagraph>
          Skilled in PHP and Node.js, with experience in developing CRUD applications, implementing authentication tokens, and managing server logic.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

      <SectionTitle>Unreal Technologies</SectionTitle>
      <SectionText2>
      A diverse skill set that extends beyond game development, incorporating industry-standard tools for 3D modeling, animation, and digital content creation.
      </SectionText2>

      <List>

      <ListItem>
      <picture>
          <SiAdobe size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Adobe Suite</ListTitle>
          <ListParagraph>
          Experienced with Photoshop, Illustrator, and Premiere Pro for graphic design, video editing, and digital content creation.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
      <picture>
          <SiUnrealengine size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Unreal Engine</ListTitle>
          <ListParagraph>
          Skilled in Blueprints scripting and AI development, with hands-on experience creating gameplay mechanics and environment interactions. Additionally, I have modified Unreal Engine’s C++ code for gameplay logic, as demonstrated in my Bulls and Cows game.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiAutodesk size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Autodesk 3DS Max</ListTitle>
          <ListParagraph>
          Proficient in polygonal modeling, texturing, and animation, with experience creating detailed 3D assets for games and presentations.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

      <SectionTitle id="tech-2">Other Technologies</SectionTitle>
      <SectionText2>
      A broad range of programming and development skills, covering multiple languages and tools used in software and game development.
      </SectionText2>
    
      <List>
      <ListItem>
        <picture>
          <DiJava size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
          Strong object-oriented programming skills with Java, primarily in console applications. Problem-solving is a strength, and I enjoy working with Java more than most other languages.
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <picture>
          <SiPython size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
          Experienced in Python with an appreciation for its versatility. Exposure to MVC architecture has expanded my understanding of Python’s potential, and I look forward to using it more.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <PiFileCSharp size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>C#</ListTitle>
          <ListParagraph>
          Developed mobile applications using C#. Created a weather app that integrates three different APIs for live weather data and utilizes SQLite for data storage.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <CgCPlusPlus size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>C++</ListTitle>
          <ListParagraph>
          Proficient in C++ with a focus on object-oriented programming. Developed a console-based Farkle dice game, which was both a fun and challenging project. 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <VscGitMerge size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
          Daily user of Git for version control in both personal and professional projects. Comfortable with branching, merging, and managing repositories. 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
      <picture>
          <GiBroadsword size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>HTML Canvas API</ListTitle>
          <ListParagraph>
          Experienced in using HTML5 Canvas to create browser-based video games. Learned game development fundamentals through Chris DeLeon's HomeTeam GameDev program.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      </List>


    <ResumeDivider colorAlt/>
  </Section>
);

}