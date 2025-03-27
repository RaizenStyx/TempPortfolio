import styled from "styled-components";

export const StyledModalBody = styled.div`
  padding-top: 10px;
  `;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: max-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 18px;
  }
  `;

export const StyledModalWrapper = styled.div`
width: 600px;
height: 800px;
margin: auto;

@media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 10px;
    max-width: 500px;
    margin: 16px auto;
  }
  `;

export const StyledModal = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  background: gray;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 15px;
  
  &::-webkit-scrollbar{
    -webkit-appearance: none;
    width: 10px;
    border-radius: 5px;
    ;
  }
  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
    width: 10px;
    border-radius: 10px;
}
  `;

export const StyledModalOverlay = styled.div`
  z-index: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  `;

export const StyledAtag = styled.a`
color: black;

`;



