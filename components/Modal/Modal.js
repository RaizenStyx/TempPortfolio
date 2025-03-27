import { StyledModalWrapper,StyledModal, StyledModalBody, StyledModalHeader, StyledModalOverlay, StyledAtag } from "./ModalStyle";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";



const Modal = ({ onClose, children, show }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    
    useEffect(() => {
      setIsBrowser(true); 
    }, []);

    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };

    const modalContent = show ? (
      <StyledModalOverlay>
        <StyledModalWrapper >
          <StyledModal colorAlt>
            <StyledModalHeader>
              
            <StyledAtag href="#" onClick={handleCloseClick}> x </StyledAtag>
             
            </StyledModalHeader>
            <StyledModalBody>{children}</StyledModalBody>
          </StyledModal>
        </StyledModalWrapper>
      </StyledModalOverlay>
      ) : null;
      if (isBrowser) {
        return ReactDOM.createPortal(
          modalContent,
          document.getElementById("modal-root")
        );
      } else {
        return null;
      }
    };

export default Modal;