import styled, { keyframes, css } from 'styled-components';


export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;

  &:hover {
    color: #945DD6;
  }
`;
export const BtnGroup = styled.div`
 
.btn-group {
  position: fixed;
  z-index: 10;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  top: 85%;
  left: -500%;
  width: 1100%;
  
}

.btn-group button {
  background-color: #00DBD8; 
  border: transparent; 
  color: black; 
  padding: 10px 0 10px; 
  cursor: pointer; 
  opacity: 0.8;
}

.btn-group button:first-child {
    border-radius: 20px 0 0 20px;
}


.btn-group button:last-child {
    border-radius: 0 20px 20px 0;
}

/* Clear floats (clearfix hack) */
.btn-group::after {
  content: "";
  clear: both;
  display: table;
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  transition: 0.5s ease;
  background-color: transparent;
  transform: scale(1.5) ;
}

button::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
  font-size: 0.9rem;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
}


button:hover::after {
  visibility: visible;
  opacity: 1;
  transition-delay: 0s;
}


@media ${(props) => props.theme.breakpoints.md} {
  display:none;
}
`;


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Container2 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;
export const Div = styled.div`
  grid-area: 1 / 1;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2;
    flex-direction: column;
  }
`;

export const AboutDiv = styled.div`
  
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const AboutDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.sm} {
  
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  transition: 0.5s ease;
  color:rgb(0, 0, 0);
  &:hover {
    color:rgb(64, 47, 223);
    opacity: 0.9;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

// Navigation Links
export const NavLink2 = styled.a`
  font-size: 2rem;
  line-height: 32px;
  transition: 0.5s ease;
  color: white;
  &:hover {
    color: #945DD6;
    opacity: 0.9;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const SocialIcons = styled.a`
opacity: 0;
transition: 0.3s ease;
text-align: center;
height: 100px;
color: white;
border-radius: 50px;
overflow: hidden;
display: block;
padding-top: 50px;
&:hover {  
    color: #945DD6;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    height: 50px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 10px;
    height: 50px;
  }
`;

export const SocialIconsNew = styled.a`
opacity: 1;
transition: 0.3s ease;
text-align: center;
height: 100px;
color: white;
border-radius: 50px;
overflow: hidden;
display: block;
padding-top: 10px;
margin: 0 0 80px 50px;
&:hover {  
    color: #945DD6;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    margin: 0 0 20px 10px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
    margin: 0 0 20px 10px;
  }
`;

export const SocialIcon = styled.a`
opacity: 0;
transition: 0.3s ease;
text-align: center;
color: white;
border-radius: 50px;
overflow: hidden;
z-index: 2;
&:hover {
    color: #945DD6;
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`;


export const SocialText = styled.a`
transition: 0.5s ease;
border-radius: 50px;
padding: 20px 50px 20px 50px;
&:hover {
    transform: scale(2);
    cursor: pointer;
  }
`;

export const Column = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 700px;
  width: 50px;
  top: 0;
  margin-left: 5%;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: 0.5s;
  padding-top: 75px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: 30%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }

  .dropdown1 {
    transform-origin: top center;
    animation: ${props =>
    props.animate &&
    css` 
      ${translateX} 300ms 60ms ease-in-out forwards
    `};
  }

  .dropdown2 {
    transform-origin: top center;
    animation: ${props =>
    props.animate &&
    css` 
      ${translateX} 300ms 120ms ease-in-out forwards
    `};
  }

  .dropdown3 {
    transform-origin: top center;
    animation: ${props =>
    props.animate &&
    css` 
      ${translateX} 300ms 180ms ease-in-out forwards
    `};
  }

  .dropdown4 {
    transform-origin: top center;
    animation: ${props =>
    props.animate &&
    css` 
      ${translateX} 300ms 240ms ease-in-out forwards
    `};
  }
  
  .dropdown5 {
    transform-origin: top center;
    animation: ${props =>
    props.animate &&
    css` 
      ${translateX} 300ms 300ms ease-in-out forwards
    `};
  }
  .dropdown6 {
    transform-origin: top center;
    animation: ${props =>
    props.animate &&
    css` 
      ${translateX} 300ms 360ms ease-in-out forwards
    `};
  }

`

const translateX = keyframes`
  0% {
    opacity: 0;
    transform: translateX(60px);
  }
  
  80% {
    transform: translateX(-5px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Row = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background: none;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  transition: transform 0.5s ease-in-out;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: none; /* Hide on large screens */
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    position: fixed;
    top: 15%;
    left: 25px; /* Adjusted for Column width */
    width: calc(100% - 50px); /* Ensures it fills the rest of the screen */
  }

  ${(props) =>
    props.animate &&
    css`
      animation: ${slideIn} 300ms ease-in-out forwards;
    `}

  .menu-item {
    flex: 1;
    text-align: center;
    opacity: 0;
    animation: ${(props) =>
      props.animate &&
      css`
        ${fadeIn2} 300ms ease-in-out forwards
      `};
  }

  .menu1 {
    animation-delay: 60ms;
  }

  .menu2 {
    animation-delay: 120ms;
  }

  .menu3 {
    animation-delay: 180ms;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const fadeIn2 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
