import styled from "styled-components"

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    max-height: 10px;
    max-width: 500px;
    margin: auto;
    padding: 50px;
`;

export const AnswerContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;
    max-width: 500px;
    justify-content: space-between;
    max-height: 50px;
    margin: auto;
    padding: 50px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    max-height: 125px;
    max-width: 300px;
    margin: 10rem auto 25rem;
    padding: 50px;
`;

export const RadioBtn = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  cursor: pointer;
  position: relative;
  background-color: #535353;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;

  :checked::after {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    cursor: pointer;
    position: relative;
    background-color: #945DD6;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
`

export const QuizBtn = styled.button`
    display: flex;
    justify-content: center;
    min-width: 50%;
    color: white;
    font-size: 1.6rem;
    padding: 2rem 1.5rem;
    font-weight: 600;
    margin: auto;
    background: black;
    border-radius: 25px;
    transition: 0.5s;
    &:focus {
        outline: none;
    }

    &:hover {
        color: #0f1624;
        background: #EAEAEA;
        cursor: pointer;
    }

    &:active {
        background: #e0e4eb;
        border: 1px solid #304169;
        box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
    }

    @media ${(props) => props.theme.breakpoints.md}{
        margin: auto;
        padding: 16px 24px;
        width: 100%;
        font-size: 20px;
        line-height: 20px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin: auto;
        padding: 8px 16px;
        width: 100%;
        font-size: 14px;
        line-height: 16px;
    }
`;

export const GridConAns = styled.div`
  padding: 10px;
  text-align: center;
`