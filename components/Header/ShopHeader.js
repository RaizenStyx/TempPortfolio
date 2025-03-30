import React, {useState} from 'react';
import { Container, NavLink, BtnGroup } from './HeaderStyles';
import { MdSlowMotionVideo, MdDesignServices, MdProductionQuantityLimits } from "react-icons/md";
import { BiStore, BiMessageRoundedAdd } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";


export default function ShopHeader() {

  const [middleBtn, setMiddleBtn] = useState(<MdProductionQuantityLimits size="3rem" />);
  const [middleLink, setMiddleLink] = useState("#hire");
  const toggle = () => {
    if(middleLink === "#hire"){
      setMiddleBtn(<BiMessageRoundedAdd size="3rem" />)
      setMiddleLink("#support")
    } else {
      setMiddleBtn(<MdProductionQuantityLimits size="3rem" />);
      setMiddleLink("#hire");
    }
  }

  return (
    <Container>
    
      <BtnGroup>
        <div className='btn-group'>

          <button data-tooltip="Go to About Me Page">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} href="/aboutme">
              <CgArrowLeftR size="3rem" />
            </NavLink>
             </li>
          </button>
  
          <button data-tooltip="Jump to Intro Video">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} href="#video">
              <MdSlowMotionVideo size="3rem" />
            </NavLink>
            </li>
          </button>

          <button data-tooltip="Jump to My Skills & Services">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} href="#skills">
              <MdDesignServices size="3rem" />
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
          
          <button data-tooltip="Jump to Stores I Developed">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} href="#stores">
              <BiStore size="3rem" />
            </NavLink>
           </li> 
          </button>

          <button data-tooltip="Jump to Contact Me">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} href="#guarantees">
              <FaRegHandshake size="3rem" />
            </NavLink>
            </li> 
          </button>

          <button data-tooltip="Go to Projects Page">
          <li>
            <NavLink style={{padding: '20px 50px 20px 50px'}} href="/">
              <CgArrowRightR size="3rem" />
            </NavLink>
           </li> 
          </button>

        </div>

      </BtnGroup> 
      
      </Container>
);
};

