import styled from "styled-components";

export const ContactFormStyle = styled.form`
    width: 100%;
    font-size: 1.2em;
    text-align: center;
`;

export const ContactLabel = styled.label`
    text-align: center;
    display: block;
    margin-bottom: .2em;
`;
export const ContactNameInput = styled.input`
    width: 100%;
    padding: .8em;
    border-radius: 40px;
`;

export const ContactEmailInput = styled.input`
    display: block;
    width: 100%;
    padding: .8em;
    border-radius: 40px;
`;

export const ContactMessInput = styled.textarea`
    width: 100%;
    padding: .8em;
    border-radius: 25px;
    height: 100px;
`;

export const Ptag = styled.p`
    padding: 15px;
    margin: flex;
`;

export const SubButton = styled.button`
    width: 200px;
    color: white;
    font-size: 1em;
    background-color: blueviolet;
    padding: .8em 1em;
    border: none;
    border-radius: .9em;
    margin-bottom: 5%;
    &:hover{
        background: violet;
        cursor: pointer;
}
`;
