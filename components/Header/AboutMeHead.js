
import React, {useState} from 'react';
import { Container, NavLink, BtnGroup } from './HeaderStyles';
import { BsFileEarmarkPersonFill } from "react-icons/bs"; 
import { GiAchievement } from "react-icons/gi";
import { DiTechcrunch } from "react-icons/di";
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";
import { MdOutlineFeedback, MdApi } from 'react-icons/md';
import { VscCode } from 'react-icons/vsc';


export default function AboutMeHead() {

  const [middleBtn, setMiddleBtn] = useState(<MdApi size="3rem" />);
  const [middleLink, setMiddleLink] = useState("#space");
  const toggle = () => {
    if(middleLink === "#contact"){
      setMiddleBtn(<MdApi size="3rem" />)
      setMiddleLink("#space");
    } else {
      setMiddleBtn(<MdOutlineFeedback size="3rem" />);
      setMiddleLink("#contact");
    }
  }

    
    return (
      
        <Container>

          <BtnGroup>
            <div className='btn-group'>

            <button data-tooltip="Go to Projects Page">
            <li>
              <NavLink style={{padding: '20px 50px 20px 50px'}} href="/">
                <CgArrowLeftR size="3rem" />
              </NavLink>
             </li>
            </button>
      
              <button data-tooltip="Jump to Timeline">
              <li>
                <NavLink style={{padding: '20px 50px 20px 50px'}} href="#about">
                  <BsFileEarmarkPersonFill size="3rem" />
                </NavLink>
              </li>
              </button>

              <button data-tooltip="Jump to Achievements">
              <li>
                <NavLink style={{padding: '20px 50px 20px 50px'}} href="#achieve">
                  <GiAchievement size="3rem" />
                </NavLink>
              </li> 
              </button>

              <button data-tooltip="Jump to Bottom/Top">
              <li>
                <NavLink style={{padding: '20px 50px 20px 50px'}} onClick={toggle} href={middleLink}>
                  {middleBtn}
                </NavLink>
              </li> 
              </button>
              
              <button data-tooltip="Jump to Technologies">
              <li>
                <NavLink style={{padding: '20px 50px 20px 50px'}} href="#tech-1">
                  <DiTechcrunch size="3rem" />  
                </NavLink>
              </li> 
              </button>

              <button data-tooltip="Jump to Languages">
              <li>
                <NavLink style={{padding: '20px 50px 20px 50px'}} href="#tech-2">
                  <VscCode size="3rem" />
                </NavLink>
              </li> 
              </button>

              <button data-tooltip="Go to Shopify Page">
              <li>
                <NavLink style={{padding: '20px 50px 20px 50px'}} href="/other">
                  <CgArrowRightR size="3rem" />
                </NavLink>
              </li> 
              </button>

            </div>

          </BtnGroup> 

        </Container>
    );
    };