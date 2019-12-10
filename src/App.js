import React from "react";
import { GlobalStyle } from "./Styles/globalStyles";
import { Navbar } from "./Components/Navbar/Navbar";
import { Banner } from "./Components/Banner/Banner";
import { FoodDialog } from "./Components/FoodDialog/FoodDialog";
import { DialogShadow } from "./Components/UI/DialogShadow";
import { Menu } from "./Components/Menu/Menu";
import { Order } from "./Components/Order/Order";
import { useActiveItem } from "./Hooks/useActiveItem";
import { OrderCompleteDialog } from "./Components/Order/OrderCompleteDialog";

// Hooks
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";
import { useAuth } from "./Hooks/useAuth";
import { useOrderVisible } from "./Hooks/useOrderVisible";
import { useSmallScreen } from "./Hooks/useSmallScreen";
import { useLogoutDropDown } from "./Hooks/useLogoutDropDown";
import { useOrderCompleteDialog } from "./Hooks/useOrderCompleteDialog";
import { useDialogShadow } from "./Hooks/useDialogShadow";

// TODo: leaf animation on hover

function App() {
  // Initialize Hooks
  const activeItem = useActiveItem();
  const orders = useOrders();
  const auth = useAuth();
  const orderCompleteDialog = useOrderCompleteDialog();
  const smallScreen = useSmallScreen();
  const logoutDropDown = useLogoutDropDown();
  const orderVisible = useOrderVisible();
  const dialogShadow = useDialogShadow({
    ...activeItem,
    ...orderVisible,
    ...orderCompleteDialog
  });

  useTitle({ ...activeItem }, { ...orders });

  function closeAll() {
    activeItem.setFoodDialogVisible(false);
    setTimeout(() => {
      activeItem.setActiveItem(null);
    }, 500);

    orderVisible.setOrderVisible(false);
  }

  return (
    <>
      <GlobalStyle />
      <DialogShadow show={dialogShadow.dialogShadow} clickHandler={closeAll} />
      <Navbar
        {...auth}
        {...smallScreen}
        {...logoutDropDown}
        {...orders}
        {...orderVisible}
        {...activeItem}
      />
      <OrderCompleteDialog {...orderCompleteDialog} />
      <Order
        {...orders}
        {...activeItem}
        {...smallScreen}
        {...auth}
        {...orderCompleteDialog}
        {...orderVisible}
      />
      <Banner />
      <Menu {...activeItem} {...orderVisible} />
      <FoodDialog {...activeItem} {...orders} {...smallScreen} />
    </>
  );
}

export default App;
