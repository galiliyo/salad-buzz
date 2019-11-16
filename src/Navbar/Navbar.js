import React from "react";
import styled from "styled-components/macro";
import { Title } from "../Styles/title";
import { colors } from "../Styles/colors";

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 12px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.saladGreen};
  position: fixed;
  width: 100%;
  z-index: 50;
`;
const BtnLogin = styled.button``;

const Logo = styled(Title)`
  font-size: 32px;
  letter-spacing: 1px;
  color: white;
  text-shadow: 1px 1px 6px #113300;
`;

const UserStatus = styled.div`
  display: flex;
  color: white;
  font-size: 14px;
  margin-right: 30px;
`;

export function Navbar({ login, logout, loggedIn }) {
  return (
    <NavbarStyled>
      <Logo>Salad Bar</Logo>
      <UserStatus>
        {loggedIn !== "loading" ? (
          <>
            {loggedIn ? "Logged In" : ""}
            {loggedIn ? (
              <>
                <div>Hello {loggedIn.displayName}</div>
                <BtnLogin onClick={logout}>Logout</BtnLogin>
              </>
            ) : (
              <BtnLogin onClick={login}>{"Login"}</BtnLogin>
            )}
          </>
        ) : (
          "Loading"
        )}
      </UserStatus>
    </NavbarStyled>
  );
}
