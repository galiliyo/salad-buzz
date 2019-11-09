import React from "react"
import styled from "styled-components"
import { Title } from "../Styles/title"
import * as colors from "../Styles/colors"

const NavbarStyled = styled.div`
  padding: 20px;
  background-color: ${colors.saladGreen};
`

const Logo = styled(Title)`
  font-size: 36px;
  color: white;
  text-shadow: 1px 1px 6px black
`

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>Salad Bar</Logo>
    </NavbarStyled>
  )
}
