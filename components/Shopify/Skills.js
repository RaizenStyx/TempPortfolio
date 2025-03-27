import React from 'react';
import { FaShopify } from 'react-icons/fa';
import { MdAttachMoney } from "react-icons/md";
import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { ImageContainer, List, ListContainer, ListItem, ListParagraph, ListTitle } from '../Technologies/TechnologiesStyles';

const Skills = () => (
<Section id="skills" style={{alignItems: 'center'}}>
    <SectionDivider divider />
    <SectionTitle>Skills and Services</SectionTitle>
    <List>

      <ListItem>
        <picture>
          <FaShopify size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Shopify Store Setup</ListTitle>
          <ListParagraph>
            Quick-start your e-commerce store. I will create the site and design while you keep doing what you need to do. With me, you will open your new Shopify store sooner than expected.
          </ListParagraph>
          <ImageContainer>
          <picture style={{paddingLeft: '20%', paddingTop: '10px'}}>
            <MdAttachMoney size="3rem" /> 
          </picture> 
          <ListParagraph>
          Starts at $1500
          </ListParagraph>
          </ImageContainer>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <FaShopify size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Shopify 2.0 Upgrade</ListTitle>
          <ListParagraph>
            Your store will get all the new features and functionality of Shopify's "Online Store 2.0" theme architecture. The difference is bigger than you think.
          </ListParagraph>
            <ImageContainer>
            <picture style={{paddingLeft: '20%', paddingTop: '10px'}}>
              <MdAttachMoney size="3rem" /> 
            </picture> 
            <ListParagraph>Starts at $1000</ListParagraph>
            </ImageContainer>
        </ListContainer>
      </ListItem>

       <ListItem>
        <picture>
          <FaShopify size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Shopify Store Training</ListTitle>
          <ListParagraph>
            I will empower you with the tools and knowledge you will need to edit and manage your Shopify store. Will work with you until you are postive you can do all the things needed to keep your store up-to date.
          </ListParagraph>
          <ImageContainer>
          <picture style={{paddingLeft: '20%', paddingTop: '10px'}}>
            <MdAttachMoney size="3rem" /> 
          </picture> 
          <ListParagraph>
            Starts at $200
          </ListParagraph>
          </ImageContainer>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <FaShopify size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Migration to Shopify</ListTitle>
          <ListParagraph>
          Moving your e-commerce shop to Shopify will prove to easier than expected with me by your side.
          </ListParagraph>
          <ImageContainer>
          <picture style={{paddingLeft: '20%', paddingTop: '10px'}}>
            <MdAttachMoney size="3rem" /> 
          </picture> 
          <ListParagraph>
            Custom Prices
          </ListParagraph>
          </ImageContainer>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <FaShopify size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Shopify Theme Customizations</ListTitle>
          <ListParagraph>
            I will custom code your theme sections and pages to help your store look like a one of a kind.
          </ListParagraph>
          <ImageContainer>
          <picture style={{paddingLeft: '20%', paddingTop: '10px'}}>
            <MdAttachMoney size="3rem" /> 
          </picture> 
          <ListParagraph>
            Custom Prices
          </ListParagraph>
          </ImageContainer>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <FaShopify size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Shopify Site Optimizations</ListTitle>
          <ListParagraph>
            I will improve your site's loading speed, improve your conversion rates, and help you improve your position in search results.
          </ListParagraph>
          <ImageContainer>
          <picture style={{paddingLeft: '20%', paddingTop: '10px'}}>
            <MdAttachMoney size="3rem" /> 
          </picture> 
          <ListParagraph>
            Custom Prices
          </ListParagraph>
          </ImageContainer>
        </ListContainer>
      </ListItem>
   </List>
  </Section>
);

export default Skills;