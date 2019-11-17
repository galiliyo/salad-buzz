import React, { useState } from "react";
import { GlobalStyle } from "./Styles/globalStyles";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Menu } from "./Menu/Menu.js";
import { Order } from "./Order/Order";
import { useActiveItem } from "./Hooks/useActiveItem";
import { OrderCompleteDialog } from "./Order/OrderCompleteDialog";

import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import { useAuth } from "./Hooks/useAuth";
import { useOrderCompleteDialog } from "./Hooks/useOrderCompleteDialog";

// leaf animation on hover
function App() {
  const activeItem = useActiveItem();
  const orders = useOrders();
  const auth = useAuth();
  const orderCompleteDialog = useOrderCompleteDialog();
  useTitle({ ...activeItem }, { ...orders });

  return (
    <>
      <GlobalStyle />

      {orderCompleteDialog.orderDialogVisible && (
        <OrderCompleteDialog {...orderCompleteDialog} {...orders} />
      )}
      <FoodDialog {...activeItem} {...orders}></FoodDialog>
      <Navbar {...auth} />

      <Order {...orders} {...activeItem} {...auth} {...orderCompleteDialog} />
      <Banner />
      <Menu {...activeItem} />
    </>
  );
}

export default App;
