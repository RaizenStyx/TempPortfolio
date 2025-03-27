import styled from "styled-components";

export const ResumeDivider = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${(props) => props.divider ? "4rem 0" : "" };

  @media ${(props) => props.theme.breakpoints.md} {
    position: center;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    position: center;
    height: 2px;
  }
`
export const ResumeTitle = styled.h2`
  text-align: center;
  margin: auto;
  font-weight: 800;
  font-size: ${(props) => props.main ? '46px' : '56px'};
  line-height: ${(props) => props.main ? '38px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }
`
export const ResumeText = styled.p`
  text-align: center;
  margin: auto;
  margin-top: 50px;
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`
export const ResumeSubText = styled.p`
  max-width: 600px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  margin: auto;
  text-align: center;
  margin-top: -10px;

@media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`

export const ResumeWorkTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '35px' : '45px'};
  line-height: ${(props) => props.main ? '40px' : '50px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: auto;
  margin-top: 15px;
  text-align: center;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }
`


export const ResumeDownload = styled.a `
color: white;
font-size: 1.6rem;
padding: 2rem 1.5rem;
font-weight: 600;
margin-bottom: 15px;
width: max-content;
background: black;
border-radius: 25px;
transition: 0.5s;
margin-left: 12em;
&:focus {
    outline: none;
  }

&:hover {
    color: #0f1624;
    background: #fff;
}

&:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
}

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 12px;
    margin-bottom: 8px;
    margin-left: 8px;
    padding: 16px 24px;
    width: max-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 10px;
    margin-bottom: 6px;
    margin-left: 6px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`