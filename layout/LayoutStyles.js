import styled from 'styled-components';

export const Container = styled.div`
max-width: 1280px;
width: 100%;
margin: auto;

`;

export const Container2 = styled.div`

width: 100%;
margin: auto;
padding: 1rem 0;

 @media ${props => props.theme.breakpoints.md}{
   padding: 10rem 0;
   width: 75%;
  }

`;
