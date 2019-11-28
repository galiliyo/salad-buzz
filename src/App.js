import React, { useState } from "react";
import { GlobalStyle } from "./Styles/globalStyles";
import { Navbar } from "./Components/Navbar/Navbar";
import { Banner } from "./Components/Banner/Banner";
import { FoodDialog } from "./Components/FoodDialog/FoodDialog";
import { DialogShadow } from "./Components/UI/DialogShadow";
import { Menu } from "./Components/Menu/Menu";
import { Modal } from "./Components/UI/Modal";
import { Order } from "./Components/Order/Order";
import { useActiveItem } from "./Hooks/useActiveItem";
import { OrderCompleteDialog } from "./Components/Order/OrderCompleteDialog";
import styled from "styled-components/macro";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import { useAuth } from "./Hooks/useAuth";
import { useOrderVisible } from "./Hooks/useOrderVisible";
import { useSmallScreen } from "./Hooks/useSmallScreen";
import { useLogoutDropDown } from "./Hooks/useLogoutDropDown";
import { useOrderCompleteDialog } from "./Hooks/useOrderCompleteDialog";
import { useDialogShadow } from "./Hooks/useDialogShadow";

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
  const dialogShadow = useDialogShadow({ ...activeItem, ...orderVisible, ...orderCompleteDialog });

  useTitle({ ...activeItem }, { ...orders });

  function closeAll() {
    OrderCompleteDialog("close");
    orderVisible.setOrderVisible(false);
    activeItem.setActiveItem(null);
  }

  return (
    <>
      <GlobalStyle />

      {dialogShadow.dialogShadow && <DialogShadow onClick={closeAll} />}

      <Navbar
        {...auth}
        {...smallScreen}
        {...logoutDropDown}
        {...orders}
        {...orderVisible}
        {...activeItem}
      />

      <Order
        {...orders}
        {...activeItem}
        {...smallScreen}
        {...auth}
        {...orderCompleteDialog}
        {...orderVisible}
        {...dialogShadow}
      />
      <Banner />
      <Menu {...activeItem} {...orderVisible} />
      <FoodDialog {...activeItem} {...orders} {...dialogShadow} />
      {orderCompleteDialog.orderDialogVisible && (
        <OrderCompleteDialog {...orderCompleteDialog} {...orders} />
      )}
    </>
  );
}

export default App;
