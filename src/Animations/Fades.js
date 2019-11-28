import styled, { keyframes } from "styled-components";
import BaseAnimation from "./BaseAnimations";

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FadeOutAnimation = keyframes`  
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;

export const FadeOut = styled(BaseAnimation)`
  animation-name: ${FadeOutAnimation};
`;
