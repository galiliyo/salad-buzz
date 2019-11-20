import React from "react";
import styled from "styled-components/macro";
import { Dropdown } from "../UI/Dropdown";
import { Title } from "../Styles/title";
import { colors } from "../Styles/colors";
import { ShoppingCartContainer } from "./ShoppingCartContainer";
import { SvgSingleNeutralCircle } from "../SvgIcons/SvgSingleNeutralCircle";

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  height: 60px;
  padding: 0 24px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.saladGreen};
  background-image: url("/img/mast-head.svg");
  background-repeat: no-repeat;
  position: fixed;
  width: calc(100vw);
  z-index: 50;
`;
const BtnLogin = styled.button`
  color: #fff;
  font-family: lato;
  font-size: 18px;
  color: white;
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`;

const Logo = styled(Title)`
  font-size: 32px;
  letter-spacing: 1px;
  color: #fff;
  /* text-shadow: 1px 1px 6px ${colors.darkgreen}; */
`;

const UserStatus = styled.div`
  display: flex;
  position: relative;
  color: white;
  font-size: 14px;
`;

const LoggedInContainer = styled.div`
  display: flex;
  align-items: middle;
`;

const UserIcon = styled(SvgSingleNeutralCircle)`
  fill: white;
  margin-left: 12px;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.15);
  }
`;

const Greeting = styled.h5`
  display: block;
  margin-left: 12px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export function Navbar({
  login,
  logout,
  loggedIn,
  isSmallScreen,
  open,
  setOpen,
  orders,
  setOrders,
  orderVisible,
  setOrderVisible,
  activeItem
}) {
  let width = window.innerWidth;
  // why does click not register  93
  return (
    <NavbarStyled>
      <Logo/>
      <UserStatus>
        {loggedIn !== "loading" ? (
          <>
            {loggedIn ? (
              <LoggedInContainer>
                {isSmallScreen && (
                  <ShoppingCartContainer
                    onClick={() => console.log("click")}
                    orders={orders}
                    setOrders={setOrders}
                    orderVisible={orderVisible}
                    setOrderVisible={setOrderVisible}
                    activeItem={activeItem}
                  />
                )}
                <UserIcon onClick={() => setOpen(true)} />
                <Greeting>Hello {loggedIn.displayName.split(" ")[0]}</Greeting>
                {open && (
                  <Dropdown logout={logout} data-ref="drop-down"></Dropdown>
                )}
              </LoggedInContainer>
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
