import React, { useState } from "react"
import { GlobalStyle } from "./Styles/globalStyles"
import { Navbar } from "./Navbar/Navbar"
import { Banner } from "./Banner/Banner"
import { FoodDialog } from "./FoodDialog/FoodDialog"
import { Menu } from "./Menu/Menu.js"
import { Order } from "./Order/Order"
import { useActiveItem } from "./Hooks/useActiveItem"
import { useOrders } from "./Hooks/useOrders"

function App() {
  const activeItem = useActiveItem()
  const orders = useOrders()
  return (
    <>
      <GlobalStyle />
      <FoodDialog {...activeItem} {...orders}></FoodDialog>
      <Navbar />
      <Order {...orders} />
      <Banner />
      <Menu {...activeItem} />
    </>
  )
}

export default App
