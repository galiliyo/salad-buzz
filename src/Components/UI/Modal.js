import React from "react";
import styled from "styled-components/macro";

const StyledModal = styled.div`
  opacity: ${props => (props.showModal ? "1" : "0")};
  background: white;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 50vh;
  right: 50%;
  width: 200px;
  z-index: 200;
`;

export const Modal = props => {
  if (!props.showModal) return null;
  else {
    return <StyledModal {...props}>this is a modal</StyledModal>;
  }
};
