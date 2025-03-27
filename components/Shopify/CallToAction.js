import React, { useState } from 'react';
import { SecondaryBtn, Section, SectionDivider, SectionText2, SectionTitle } from '../../styles/GlobalComponents';
import { ResumeDivider } from '../Resume/ResumeStyles';
import { BsDot } from "react-icons/bs";
import ContactForm from '../ContactForm/ContactForm';
import { MyImage } from '../Hero/HeroStyles';



function CallToAction() {
    const guarantees = ["On-Time Delivery", "Daily Updates", "100% Money Back"];
    const [isShown, setIsShown] = useState(false);
    const toggle = () => {
      setIsShown(prevState => !prevState)
    }
    return (
  <Section nopadding id="guarantees" style={{alignItems: 'center'}}>
    <SectionDivider divider />

    <SectionTitle>Let's get to work!!!</SectionTitle>
   
    <SectionText2 style={{marginBottom: '-40px'}}>
        Let me help you make more money with Shopify online shopping!
        <br/>
        <br/>
    </SectionText2>

        <SecondaryBtn onClick={toggle}>Contact Me</SecondaryBtn>

        {isShown && <ContactForm />}
        {isShown && <MyImage src='images/me.png' />}

        {!isShown && 
        <div style={{textAlign: 'center', margin: '0 auto'}}>
        <style jsx>{`
        ul {
            margin-top:6%;
            position: relative;
            bottom: 5rem;
            font-size: 24px;
            line-height: 40px;
            font-weight: 300;
            padding-bottom: 3.6rem;
            color: rgba(255, 255, 255, 0.5);
            text-align: center;
          }
           span {
            font-size: 24px;
            line-height: 40px;
            font-weight: 300;
            padding-bottom: 3.6rem;
            color: rgba(255, 255, 255, 0.5);
            text-align: center;} 
          `}</style>

        
        <ul>
        Take a look at some of my guarantees:
            {guarantees.map((guarantee) => (
                
                <li key={guarantee}><BsDot />{guarantee}</li>
            ))}
            + Many More!
           
        </ul>
            
       <span> I look forward to working with you! </span>
        
        
        </div>
        }
    
    <ResumeDivider />
  </Section>
    )
};

export default CallToAction