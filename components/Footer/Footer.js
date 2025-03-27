import React from 'react';
import { CompanyContainer, FooterWrapper, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';



export default function Footer() {

  return (
    <FooterWrapper>

      <SocialIconsContainer>

        <CompanyContainer>
          <Slogan>Freelance Developer</Slogan>
        </CompanyContainer>

        <SocialContainer>

          <CompanyContainer>
            <Slogan>Gamer turned Programmer</Slogan> 
          </CompanyContainer>
          
        </SocialContainer>

      </SocialIconsContainer>

    </FooterWrapper>
  );
};
