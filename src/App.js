import React, { useState } from "react"
import { GlobalStyle } from "./Styles/globalStyles"
import { Navbar } from "./Navbar/Navbar"
import { Banner } from "./Banner/Banner"
import { FoodDialog } from "./FoodDialog/FoodDialog"
import { Menu } from "./Menu/Menu.js"

function App() {
  const [openFood, setOpenFood] = useState()
  return (
    <>
      <GlobalStyle />
      <FoodDialog activeItem={openFood} setOpenFood={setOpenFood}></FoodDialog>
      <Navbar />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  )
}

export default App
