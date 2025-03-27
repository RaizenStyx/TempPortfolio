import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

    &::-webkit-scrollbar{
    width: 15px;
    border-radius: 5px;
    background: ${() =>
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'
    };
  }
  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
    width: 20px;
    border: 2px solid #945DD6;
    border-radius: 5px;
    background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  }
  &::-webkit-scrollbar-button {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background: ${() => 
    'linear-gradient(90deg, #F46737 0%, #945DD6 100%)'
  }


  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

}`;

export default GlobalStyles;