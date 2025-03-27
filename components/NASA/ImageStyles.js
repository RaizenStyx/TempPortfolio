import styled from "styled-components";

export const ImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal-width columns */
  gap: 16px; /* Adjust the gap between images as needed */
  width: 100%; /* Make sure the grid takes full width */

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* For smaller screens, display 2 images per row */
  }
`;


export const NasaImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 1rem;
`

export const SearchInput = styled.input`
    width: 30%;
    padding: 12px 20px;
    margin: 2.5rem 35%;
    border-radius: 50px;

`;

export const NasaButton = styled.button`
    transition-duration: 0.4s;
    width: 50%;
    padding: 0.5rem;
    margin: 1rem 25% 15em;
    background-color: white;
    color: black;
    border: 2px solid #4caf50;
    border-radius: 50px;
    &:hover {
        background-color: #4caf50;
        color: white;
        cursor: pointer;
    }
    &:disabled {
        opacity: 0.5;
    }

`;

export const Fade = styled.div`
    animation: fadeIn ease 3s;
    -webkit-animation: fadeIn ease 3s;
    -moz-animation: fadeIn ease 3s;
    -o-animation: fadeIn ease 3s;
    -ms-animation: fadeIn ease 3s;

    @keyframes fadeIn {
        0% {
            opacity: 0;

        }
        100% {
            opacity: 1;
        }
    }

    @-moz-keyframes fadeIn {
        0% {
            opacity: 0;

        }
        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0;

        }
        100% {
            opacity: 1;
        }
    }

    @-o-keyframes fadeIn {
        0% {
            opacity: 0;

        }
        100% {
            opacity: 1;
        }
    }

    @-ms-keyframes fadeIn {
        0% {
            opacity: 0;

        }
        100% {
            opacity: 1;
        }
    }

`;