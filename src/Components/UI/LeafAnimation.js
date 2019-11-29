import React from "react";
import styled from "styled-components/macro";


export const LeafAnimation = props => {
  
  const Leaf=styled.div`
  transform: rotate(-45deg);
  position:absolute;
  left: -50px;
  `
  
  return (
    <Leaf>
      <img src="/img/leaf1.svg" alt="" height="100"/>
    </Leaf>
  );
};
