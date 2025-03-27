import React from 'react';
import { BlogCard, CardInfo, ExternalLinksBIG, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { shop, clientStores } from '../../constants/constants';


const ShopProjects = () => (
  <>
  <Section nopadding id="stores" style={{alignItems: 'center'}}>
    <SectionDivider divider />
    <SectionTitle>Shopify Development Stores</SectionTitle>
  </Section>
    <GridContainer>
      {shop.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title = "true">{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Features</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
            
                <ExternalLinksBIG href={p.source} target='_blank'>Store Tour</ExternalLinksBIG>
              
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    <Section nopadding style={{alignItems: 'center'}}>
    <SectionDivider divider />
    <SectionTitle>Shopify Client Stores</SectionTitle>
    </Section>
    <GridContainer>
      {clientStores.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title = "true">{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Features</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            {/* <UtilityList>
            
                <ExternalLinksBIG href={p.source} target='_blank'>Store Link</ExternalLinksBIG>
              
            </UtilityList> */}
          </BlogCard>
        );
      })}
    </GridContainer>
  </>
);

export default ShopProjects;