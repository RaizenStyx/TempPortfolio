import { ContactNameInput, ContactEmailInput, ContactMessInput, Ptag, SubButton, ContactFormStyle, ContactLabel } from "./ContactFormStyles";
import { Div } from "../Header/HeaderStyles";
import { useState } from "react";
import { SectionText2 } from "../../styles/GlobalComponents";

export default function ContactForm() {

    const [showComp, setShowComp] = useState(true);

    async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name){
        return;
      } else {
        formData[field.name] = field.value;
      }
        
    });

    fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    setShowComp(false);

  }

    return(


       <ContactFormStyle method="post" onSubmit={handleOnSubmit}>
        {!showComp && <SectionText2 style={{fontSize: "50px"}}>Thank You!</SectionText2>}
          {showComp && <Div>Quick Contact Form</Div>}
          {showComp && <Ptag>
          <ContactLabel htmlFor="name">Name:</ContactLabel>
          <ContactNameInput placeholder="Your Name..." id="name" type="text" name="name" required />
        </Ptag>}
        {showComp && <Ptag>
          <ContactLabel htmlFor="email">Email:</ContactLabel>
          <ContactEmailInput placeholder="Your Email..." id="email" type="text" name="email"required />
        </Ptag>}
        {showComp && <Ptag>
          <ContactLabel htmlFor="message">Message:</ContactLabel>
          <ContactMessInput placeholder="Please message me for any questions!" id="message" name="message" required />
        </Ptag>}
        {showComp && <Ptag>
          <SubButton>Submit</SubButton>
        </Ptag> }
        </ContactFormStyle>

      
    );
};