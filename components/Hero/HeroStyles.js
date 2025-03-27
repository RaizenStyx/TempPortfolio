import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
 
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    margin: 0 auto;
  }
`;

export const MyImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-radius: 25%;
  &:hover {
    animation: rotate 2s ease-in-out;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0); 
    }
    25% {
      transform: rotate(25deg); 
    }
    50% {
      transform: rotate(0); 
    }
    75%{
      transform: rotate(-25deg); 
    }
    100% {
      transform: rotate(0deg); 
    }
  }
`;

