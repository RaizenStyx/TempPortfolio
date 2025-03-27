import React, {useState} from 'react';
import { Container, NavLink, BtnGroup } from './HeaderStyles';
import { MdQuiz } from "react-icons/md";
import { FaReact, FaPlay } from "react-icons/fa";
import { RiFileDownloadFill } from 'react-icons/ri'
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";
import { VscLayersActive, VscProject } from "react-icons/vsc";

export default function OtherHeader() {

  const [middleBtn, setMiddleBtn] = useState(<MdQuiz size="3rem" />);
  const [middleLink, setMiddleLink] = useState("#quiz");
  const toggle = () => {
    if(middleLink === "#quiz"){
      setMiddleBtn(<RiFileDownloadFill size="3rem" />);
      setMiddleLink("#resume");
    } else {
      setMiddleBtn(<MdQuiz size="3rem" />);
      setMiddleLink("#quiz");
    }
  }

  return (
    <Container>

      <BtnGroup>

        <div className='btn-group'>

          <button data-tooltip="Go to Shopify Page">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} href="/other">
              <CgArrowLeftR size="3rem" />
            </NavLink>
            </li>
          </button>
  
          <button data-tooltip="Jump to All Projects">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} href="#projects">
              <VscProject size="3rem" />
            </NavLink>
          </li>
          </button>

          <button data-tooltip="Jump to React Projects">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} href="#react">
              <FaReact size="3rem" />
            </NavLink>  

          </li> 
          </button>

          <button data-tooltip="Jump to Top/Bottom">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} onClick={toggle} href={middleLink}>
              {middleBtn}
            </NavLink>
          </li> 
          </button>

          <button data-tooltip="Jump to OOP Projects">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} href="#compiler">    
              <VscLayersActive  size="3rem" />
            </NavLink>
          </li> 
          </button>
          
          <button data-tooltip="Jump to Game Projects">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} href="#game">
              <FaPlay size="3rem" />
            </NavLink>
          </li> 
          </button>

          <button data-tooltip="Go to About Me Page">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} href="/aboutme">
              <CgArrowRightR size="3rem" />
            </NavLink>
          </li> 
          </button>

        </div>

      </BtnGroup> 

    </Container>
  );

};