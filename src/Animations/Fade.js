import styled from "styled-components/macro";

export const Fade = styled.div`
  opacity: ${props => (props.show ? "1" : "0")};
  visibility: ${props => (props.show ? "visible" : "hidden")};
  transition: all 0.35s;
  z-index: 10;
  position: absolute;
`;
