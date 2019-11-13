import React from "react"
import styled from "styled-components/macro"
import { Title } from "../Styles/title"
import * as colors from "../Styles/colors"

const NavbarStyled = styled.div`
  top: 0;
  padding: 12px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.saladGreen};
  position: fixed;
  width: 100%;
  z-index: 50;
`

const Logo = styled(Title)`
  font-size: 32px;
  letter-spacing: 1px;
  color: white;
  text-shadow: 1px 1px 6px #113300;
`

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>Salad Bar</Logo>
    </NavbarStyled>
  )
}
