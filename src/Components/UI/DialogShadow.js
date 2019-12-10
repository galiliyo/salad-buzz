import React from "react";
import styled from "styled-components/macro";
import { Fade } from "Animations/Fade";

const ShadowDiv = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: black;
  opacity: 0.6;
`;

export const DialogShadow = props => {
  return (
    <Fade show={props.show}>
      <ShadowDiv onClick={props.clickHandler} />
    </Fade>
  );
};
