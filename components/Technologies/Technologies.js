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
      With this portfolio being my first lanuched project, it only grew my love for all things web development.  
      It is a combination of JavaScript I have learned on my own on top of what I learned through college. 
      I turned to shopify in the summer of 2022 to extend my skills. Below is some of the thing I feel confident in and what I am familiar with other than E-Commerce. 
    </SectionText2>
    <List>

      <ListItem>
        <picture>
          <SiNextdotjs size="5rem" />
        </picture> 
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          Experienced with HTML, CSS, JavaScript, React, Next.js, Vue, and Angular.
          My portfolio is built with Next.js and is my biggest project yet.
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
          Experienced with MySQL, Firebase, and MongoDB. I have created and modified databases that use Server-Side languages.
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
          Experienced with PHP and Node. Along with the databases, I have created CRUD applications along with using Auth tokens.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

      <SectionTitle>Unreal Technologies</SectionTitle>
      <SectionText2>
        Below are some things I am currently learning and improving on. They are in order from what I feel the best about to what I feel the least comfortable doing.
      </SectionText2>

      <List>

      <ListItem>
      <picture>
          <SiAdobe size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Adobe Suite</ListTitle>
          <ListParagraph>
          Familiar with using Git for version control. I use it every day for personal use, but I don't do pulls, merges, or branching at all. That is where my inexperience lies, but I have learned how to use this tool myself and still improving.
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
          Familiar using HTML5 Canvas for making simple video games. I have been following Chris DeLeon's HomeTeamGameDev program since the summer of 2021. Through his course, I have been working on making my own simple video game.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiAutodesk size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Autodesk 3DS max</ListTitle>
          <ListParagraph>
          Familiar with using C++ and unreal engine. I came across a great deal on a course that introduced people to the topics. Currently working my way through it, learning the syntax for C++ and learning what all goes into game development. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

      <SectionTitle id="tech-2">Other Technologies</SectionTitle>
      <SectionText2>
      With this portfolio being my first lanuched project, it only grew my love for all things web development.  
      It is a combination of JavaScript I have learned on my own on top of what I learned through college. 
      I turned to Shopify in the summer of 2022 to extend my skills. Below is some of the thing I feel confident in and what I am familiar with other than E-Commerce. 
      </SectionText2>
    
      <List>
      <ListItem>
        <picture>
          <DiJava size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
          Experienced with Java and using objects. I have mainly been limited to the console but I am a great problem solver and enjoy using Java more than most other languages.
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
          Experienced with Python. While using an MVC model, I realized how much more Python has to offer and the versatility of this language. Looking forward to using this language more.
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
          Experienced with C# for mobile app development. Created a weather app that uses 3 different API's for pulling weather data and SQLite to store locations inside a database.
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
          Experienced with using C++ and using objects. I have only worked with the console here as well, but I developed a Farkle dice game that was quite fun and challenging.  
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
          Experienced with using Git for version control. I use it every day for personal use and for my previous employer. 
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
          Familiar using HTML5 Canvas for making simple video games that can be played in the browser. Taught by Chris DeLeon's HomeTeamGameDev program.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      </List>


    <ResumeDivider colorAlt/>
  </Section>
);

}