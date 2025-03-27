import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillCloseCircle } from 'react-icons/ai';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { DiCssdeck } from 'react-icons/di';
import { SiUpwork } from 'react-icons/si';
import { CgMenuGridO } from 'react-icons/cg'
import { Container2, Div1, Div2, Div3, NavLink2, SocialIcons, SocialIcon, Column, Row } from './HeaderStyles';


export default function Header() {
  const [doAnimate, setDoAnimate] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const toggle = () => {
    setIsShown(!isShown)
    setDoAnimate(!doAnimate)
  }

return (
  <Container2>
    
    <Div1>
      <NavLink2 href="/">
        <DiCssdeck size='3rem' />
          Portfolio
      </NavLink2>  
    </Div1>

    <Div2>

        <li>    
          <NavLink2 href="/">
            Projects
          </NavLink2>
        </li>
        <li>
          <NavLink2 href="/aboutme">
            About Me
          </NavLink2>
        </li>
        <li>
          <NavLink2 href="/other">
            Shopify Freelancer
          </NavLink2>
        </li>
    </Div2>
 
    <Div3>
    
      <SocialIcon style={{opacity: '1'}} onClick={toggle}>
        <CgMenuGridO size="6rem" />
      </SocialIcon>

      {isShown && <Column animate={doAnimate}>

        <SocialIcons className='dropdown1' href='mailto:me@calexreed.dev'>
          <HiOutlineMail size="3rem" />
        </SocialIcons>

        <SocialIcons className='dropdown2' href='tel:423-367-5437'>
          <HiOutlinePhone size="3rem" />
        </SocialIcons>
   
        <SocialIcons className='dropdown3' href='https://www.linkedin.com/in/connor-reed-623655214/' target='_blank'>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>        

        <SocialIcons className='dropdown4' href='https://github.com/RaizenStyx' target='_blank'>
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons className='dropdown5' href='https://www.upwork.com/freelancers/~011890ee4ee1c9e2f6' target='_blank'>
          <SiUpwork size="3rem" />
        </SocialIcons>

        <SocialIcons className='dropdown6' onClick={toggle}>
          <AiFillCloseCircle size="3rem" />
        </SocialIcons>

      </Column>}

      {isShown &&  <Row animate={doAnimate}>
        
        <NavLink2 href="/" className="menu-item menu1">
          Projects
        </NavLink2>
         <NavLink2 href="/aboutme" className="menu-item menu2">
          About Me
        </NavLink2>
        <NavLink2 href="/other" className="menu-item menu3">
          Shopify Freelancer
        </NavLink2>
       </Row>
    }

    </Div3>
    </Container2>
  )
};
