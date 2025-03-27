import { Section } from "../../styles/GlobalComponents";
import { NewBtn, GridContainer } from "../Projects/ProjectsStyles";
import XAppHero from "../Hero/XAppHero";
import { SectionDivider } from "../../styles/GlobalComponents";
import Modal from "../Modal/Modal";
import React, { useState } from 'react';
import { Img } from "../Projects/ProjectsStyles";

const XApp = () =>{

    const [showModal, setShowModal] = useState(false);

    const manageState =() => {
        setShowModal(!showModal)
    }

  return (

    <Section>
      <SectionDivider divider />

      <GridContainer>

      <NewBtn onClick={() => manageState()} >App Images
        <Modal onClose={() => manageState()}
              show = {showModal}>
            <Img src = "/images/apps.png" />   
        </Modal>
      </NewBtn>

      <XAppHero />
      
      </GridContainer>
    </Section>
   
  );
}

export default XApp;