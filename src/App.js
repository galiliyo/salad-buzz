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
import { useAuth } from "./Hooks/useAuth";

const database = window.firebase.database();
const refTest = database.ref("testObj").push();
refTest.set({ hello: "World" });

// leaf animation on hover
function App() {
  const activeItem = useActiveItem();
  const orders = useOrders();
  const auth = useAuth();
  useTitle({ ...activeItem }, { ...orders });
  return (
    <>
      <GlobalStyle />
      <FoodDialog {...activeItem} {...orders}></FoodDialog>
      <Navbar {...auth} />
      <Order {...orders} {...activeItem} {...auth} />
      <Banner />
      <Menu {...activeItem} />
    </>
  );
}

export default App;
