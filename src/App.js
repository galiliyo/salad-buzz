import React, { useState } from "react";
import { GlobalStyle } from "./Styles/globalStyles";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Menu } from "./Menu/Menu.js";
import { Order } from "./Order/Order";
import { useActiveItem } from "./Hooks/useActiveItem";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";

let auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

auth.signInWithPopup(provider);

// leaf animation on hover
function App() {
  const activeItem = useActiveItem();
  const orders = useOrders();
  // const qty=useQty(1)
  useTitle({ ...activeItem }, { ...orders });
  return (
    <>
      <GlobalStyle />
      <FoodDialog {...activeItem} {...orders}></FoodDialog>
      <Navbar />
      <Order {...orders} {...activeItem} />
      <Banner />
      <Menu {...activeItem} />
    </>
  );
}

export default App;
