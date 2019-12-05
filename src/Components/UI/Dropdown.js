import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  background: #fff;
  padding: 6px 0;
  color: #222;
  border-radius: 3px;
  position: absolute;
  top: 36px;
  left: 56px;
  width: 100px;
  text-align: center;
  box-shadow: 4px 3px 8px 0px rgba(0, 0, 0, 0.55);
  @media (max-width: 768px) {
    left:initial;
    right: 0;
  }
`;

const DropDownItem = styled.a`
  margin: 0;
  line-height: 36px;
  display: block;
  &:hover {
    background: lightblue;
    cursor: pointer;
  }
`;

export function Dropdown({ logout }) {
  return (
    <Container>
      <DropDownItem onClick={logout}>Logout</DropDownItem>
    </Container>
  );
}
