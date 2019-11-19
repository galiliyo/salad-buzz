import React, { useState } from "react";
import { GlobalStyle } from "./Styles/globalStyles";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Menu } from "./Menu/Menu.js";
import { Order } from "./Order/Order";
import { useActiveItem } from "./Hooks/useActiveItem";
import { OrderCompleteDialog } from "./Order/OrderCompleteDialog";
import styled from "styled-components/macro";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import { useAuth } from "./Hooks/useAuth";
import { useOrderVisible } from "./Hooks/useOrderVisible";
import { useSmallScreen } from "./Hooks/useSmallScreen";
import { useLogoutDropDown } from "./Hooks/useLogoutDropDown";
import { useOrderCompleteDialog } from "./Hooks/useOrderCompleteDialog";

const TestModal = styled.div`
  padding: 20px;
  height: 50px;
  width: 200px;
  background: white;
  position: fixed;
  bottom: 10px;
  left: 50px;
  z-index: 200;
`;

// leaf animation on hover
function App() {
  const activeItem = useActiveItem();
  const orders = useOrders();
  const auth = useAuth();
  const orderCompleteDialog = useOrderCompleteDialog();
  const smallScreen = useSmallScreen();
  const logoutDropDown = useLogoutDropDown();
  const orderVisible = useOrderVisible();

  useTitle({ ...activeItem }, { ...orders });

  return (
    <>
      <GlobalStyle />
      {orderCompleteDialog.orderDialogVisible && (
        <OrderCompleteDialog {...orderCompleteDialog} {...orders} />
      )}
      <FoodDialog {...activeItem} {...orders}></FoodDialog>
      <Navbar {...auth} {...smallScreen} {...logoutDropDown} {...orders} />

      <Order {...orders} {...activeItem} {...auth} {...orderCompleteDialog} />
      <Banner />
      <Menu {...activeItem} />
    </>
  );
}

export default App;
