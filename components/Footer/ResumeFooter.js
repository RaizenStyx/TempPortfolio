import React from 'react';
import { LinkColumn, LinkItem, LinkList, LinkTitle, Slogan } from './FooterStyles';

const ResumeFooter = () => {

  return (
    <>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
            <LinkItem href='tel:423-367-5437'>423-367-5437</LinkItem>
          </LinkColumn>
          </LinkList>

          <LinkColumn>
          <LinkTitle>Email</LinkTitle>
            <LinkItem href='mailto:me@calexreed.dev'>me@calexreed.dev</LinkItem>
          </LinkColumn><br/><br/>
      
          <Slogan>Gamer turned Programmer</Slogan>
        
    </>
  );
};

export default ResumeFooter;
